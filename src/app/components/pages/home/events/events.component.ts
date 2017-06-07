import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { HomeService } from '../../../../services/index';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Http, URLSearchParams } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { addDays } from 'date-fns';
import { isSameMonth, isSameDay, startOfMonth, endOfMonth, startOfWeek, endOfWeek, startOfDay, endOfDay, format } from 'date-fns';
import { CalendarEvent, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { colors } from 'demo-utils/colors';

// function that will help us display data
//FAE = Fearless Alliance Events
interface Fae {
  id: number;
  title: string;
  release_date: string;
}

interface FaeEvent extends CalendarEvent {
  fae: Fae;
}

@Component({
  selector: 'events',
	changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'events.component.html'
})
export class EventsComponent  {
  view: string = 'week';
 //view: string = 'month';
 //view: string = 'day';


  viewDate: Date = new Date();

  events$: Observable<CalendarEvent[]>;

  activeDayIsOpen: boolean = false;

  constructor(private http: Http) {}

  ngOnInit(): void {
    this.fetchEvents();
  }


  fetchEvents(): void {

    //this will help us retrive the start date
    const getStart: any = {
      month: startOfMonth,
      week: startOfWeek,
      day: startOfDay
    }[this.view];

    //this will help us retrive the end date
    const getEnd: any = {
      month: endOfMonth,
      week: endOfWeek,
      day: endOfDay
    }[this.view];

    //retrive YYYY-MM-DD, title and id from birthday-json
    //this can also be used to retrive data from an url
    const search: URLSearchParams = new URLSearchParams();
    search.set('primary_release_date.gte', format(getStart(this.viewDate), 'YYYY-MM-DD'));
    search.set('primary_release_date.lte', format(getEnd(this.viewDate), 'YYYY-MM-DD'));
    search.set('api_key', '0ec33936a68018857d727958dca1424f');
    this.events$ = this.http
      .get('assets/json/birthday-data.json', {search})
      .map(res => res.json())
      .map(({results}: {results: Fae[]}) => {
        return results.map((fae: Fae) => {
          return {
            title: fae.title,
            start: new Date(fae.release_date),
            color: colors.yellow,
            fae
          };
        });
      });
  }

  // display the calendar and its data
  //the function also helps us with clickable events, when displaying the MONTHLY calendar
  dayClicked({date, events}: {date: Date, events: CalendarEvent[]}): void {

    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }


  eventClicked(event: Fae): void {
    window.open("https://docs.google.com/spreadsheets/d/152ndLffYQCB5AesRzUGkeElrBR5m7QibPpVGHqK9Wj8/edit#gid=1274985437" + event.title);
}

}
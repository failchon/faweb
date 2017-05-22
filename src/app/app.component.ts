import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { addDays } from 'date-fns';
import { isSameMonth, isSameDay, startOfMonth, endOfMonth, startOfWeek, endOfWeek, startOfDay, endOfDay, format } from 'date-fns';
import { CalendarEvent, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { colors } from '../demo-utils/colors';

interface Film {
  id: number;
  title: string;
  release_date: string;
}

interface FilmEvent extends CalendarEvent {
  film: Film;
}

@Component({
  selector: 'my-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
})

export class AppComponent  { 
title ="Fearless Alliance";
 view: string = 'week';
 //view: string = 'month';
 //view: string = 'day';

  viewDate: Date = new Date();

  events$: Observable<FilmEvent[]>;

  activeDayIsOpen: boolean = false;

  constructor(private http: Http) {}

  ngOnInit(): void {
    this.fetchEvents();
  }

  fetchEvents(): void {

    const getStart: any = {
      month: startOfMonth,
      week: startOfWeek,
      day: startOfDay
    }[this.view];

    const getEnd: any = {
      month: endOfMonth,
      week: endOfWeek,
      day: endOfDay
    }[this.view];

    const search: URLSearchParams = new URLSearchParams();
    search.set('primary_release_date.gte', format(getStart(this.viewDate), 'YYYY-MM-DD'));
    search.set('primary_release_date.lte', format(getEnd(this.viewDate), 'YYYY-MM-DD'));
    search.set('api_key', '0ec33936a68018857d727958dca1424f');
    this.events$ = this.http
      .get('assets/json/birthday-data.json', {search})
      .map(res => res.json())
      .map(({results}: {results: Film[]}) => {
        return results.map((film: Film) => {
          return {
            title: film.title,
            start: new Date(film.release_date),
            color: colors.yellow,
            film
          };
        });
      });
  }

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
}

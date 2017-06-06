import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { addDays } from 'date-fns';
import { isSameMonth, isSameDay, startOfMonth, endOfMonth, startOfWeek, endOfWeek, startOfDay, endOfDay, format } from 'date-fns';
import { CalendarEvent, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { colors } from '../demo-utils/colors';
import { Router, NavigationEnd} from "@angular/router";


declare var ga:Function;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})

export class AppComponent  {

  private currentRoute:string;

    constructor(public router: Router) {
            router.events.distinctUntilChanged((previous: any, current: any) => {
                if(current instanceof NavigationEnd) {
                    return previous.url === current.url;
                }
                return true;
            }).subscribe((x: any) => {
                console.log('router.change', x);
                ga('send', 'pageview', x.url);
            });
        }
  
}

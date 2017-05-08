import { Component } from '@angular/core';
import { HomeService } from '../../../../services/index';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';

@Component({
  selector: 'events',
  templateUrl: 'events.component.html'
})
export class EventsComponent  {
	 h = new Date(2017,2,5);	 
	 missions = new Date(2017,2,5);
	 firstwing = this.missions.setDate(this.missions.getDate() + 1);
	 secondwing = this.missions.setDate(this.missions.getDate() + 1);
	 thirdwing = this.missions.setDate(this.missions.getDate() + 1);
	 fourthwing = this.missions.setDate(this.missions.getDate() + 1);

	 getStyle() {

	 	var d = new Date(2017,2,5);
	 	if( d ) {
	 		return "green";
	 	} else {
	 		return "white";
	 	}
	 }

	 tab = 0;

  setTab(num: number) {
    this.tab = num;
  }

}


import { Component } from '@angular/core';
import { HomeService } from '../../../../services/index';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';

@Component({
  selector: 'events',
  templateUrl: 'events.component.html'
})
export class EventsComponent  {
	 h = new Date(2017,4,28);	 
	 missions = new Date(2017,4,14);	
	 firstwing = this.missions.setDate(this.missions.getDate() + 1);
	 secondwing = this.missions.setDate(this.missions.getDate() + 4);
	 thirdwing = this.missions.setDate(this.missions.getDate() + 2);
	 fourthwing = this.missions.setDate(this.missions.getDate() + 1);

	

	 tab = 0;

  setTab(num: number) {
    this.tab = num;
  }

}


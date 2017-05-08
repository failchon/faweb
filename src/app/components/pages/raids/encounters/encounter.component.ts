import { Component } from '@angular/core';
import { RaidsService } from '../../../../services/index';

@Component({
  selector: 'encounter',
  templateUrl: 'encounter.component.html'
})
export class EncounterComponent  { 

	wing1 : any;
	wing2 : any;
	wing3 : any;
	wing4 : any;

	constructor(rangService : RaidsService){
		rangService.getAboutData().subscribe(data => {
			this.wing1 = data.json().encounter.wing1;
			this.wing2 = data.json().encounter.wing2;
			this.wing3 = data.json().encounter.wing3;
			this.wing4 = data.json().encounter.wing4;
		});
	
	
  }
 }
import { Component } from '@angular/core';
import { RaidsService } from '../../../../services/index';

@Component({
  selector: 'introduction',
  templateUrl: 'introduction.component.html'
})
export class IntroductionComponent  { 

	data : any;
	title: any;
	ready: any;
	descriptionList:any;
	option: Array<any>;
	descriptionList2: any;
	descriptionList3: any;
	option2:any;
	involved:any;
	notes:any;
	notes2:any;

	// Get json data from raids-data.json
	constructor(rangService : RaidsService){
		rangService.getAboutData().subscribe(data => {
			this.data = data.json().dedication;
			this.title = data.json();
			this.ready = data.json().ready;
			this.descriptionList = data.json().ready.descriptionList;
			this.option = data.json().ready.descriptionList.option;
			this.descriptionList2 = data.json().ready.descriptionList2;
			this.descriptionList3 = data.json().ready.descriptionList3;
			this.option2 = data.json().ready.descriptionList3.option;
			this.involved = data.json().involved;
			this.notes = data.json().notes;
			this.notes2 = data.json().notes.descriptionList;
			console.log(this.data);
		});
	
	
 }
 }
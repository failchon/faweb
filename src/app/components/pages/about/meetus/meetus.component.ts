import { Component } from '@angular/core';
import { AboutService } from '../../../../services/index';

@Component({
  selector: 'meetus',
  templateUrl: 'meetus.component.html'
})
export class MeetusComponent  { 

	data : any;

	constructor(rangService : AboutService){
		rangService.getAboutData().subscribe(data => {
			this.data = data.json().meetus;
			console.log(this.data);

		});
	}
 }
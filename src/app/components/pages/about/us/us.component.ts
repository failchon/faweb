import { Component } from '@angular/core';
import { AboutService } from '../../../../services/index';

@Component({
  selector: 'us',
  templateUrl: 'us.component.html'
})
export class UsComponent  { 

	data : any;

	//retrive data from about-data.json
	constructor(rangService : AboutService){
		rangService.getAboutData().subscribe(data => {
			this.data = data.json().us;
			console.log(this.data);

		});
	}
 }
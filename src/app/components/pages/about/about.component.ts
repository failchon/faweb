import { Component } from '@angular/core';
import { AboutService } from '../../../services/index';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  { 

	data : any;
	
	//retrive data from about-data.json
	constructor(rangService : AboutService){
		rangService.getAboutData().subscribe(data => {
			this.data = data.json().rangs;
			console.log(this.data);

		});
	}
 }
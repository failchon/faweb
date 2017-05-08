import { Component } from '@angular/core';
import { AboutService } from '../../../services/index';

@Component({
  selector: 'about',
  templateUrl: 'about.component.html'
})
export class AboutComponent  { 

	data : any;

	constructor(rangService : AboutService){
		rangService.getAboutData().subscribe(data => {
			this.data = data.json().rangs;
			console.log(this.data);

		});
	}
 }
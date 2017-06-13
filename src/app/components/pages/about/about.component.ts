import { Component } from '@angular/core';
import { AboutService } from '../../../services/index';

export interface Image {
	title: string;
	url: string;
}

@Component({
  selector: 'about',
  templateUrl: './about.component.html'
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

	public images = IMAGES;
 }

 var IMAGES: Image[] = [
	{ "title": "We are covered", "url": "../../../../assets/images/about/guild.png" },
	{ "title": "Generation Gap", "url": "../../../../assets/images/about/guild.png" },
	{ "title": "Potter Me", "url": "../../../../assets/images/about/guild.png" },
	{ "title": "Pre-School Kids", "url": "../../../../assets/images/about/guild.png" }
];
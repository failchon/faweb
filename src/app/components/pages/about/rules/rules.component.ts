import { Component } from '@angular/core';
import { AboutService } from '../../../../services/index';

@Component({
  selector: 'rules',
  templateUrl: 'rules.component.html'
})
export class RulesComponent  { 

	data : any;

	//retrive data from about-data.json
	constructor(rangService : AboutService){
		rangService.getAboutData().subscribe(data => {
			this.data = data.json().rules;
			console.log(this.data);

		});
	}
 }
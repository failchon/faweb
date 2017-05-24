import { Component } from '@angular/core';
import { ContributionService } from '../../../../services/index';
import { Observable } from 'rxjs';

@Component({
  selector: 'donations',
  templateUrl: 'donations.component.html'
})
export class DonationsComponent  {

	data :any;

	//retrive data from contribution-data.json
	constructor(rangService : ContributionService){
		rangService.getGw2ApiGuild().subscribe(data => {
			this.data = data.json();
			console.log(this.data);

		});

 }

}


import { Component } from '@angular/core';
import { RaidsService } from '../../../../../services/index';

@Component({
  selector: 'sabetha',
  templateUrl: 'sabetha.component.html'
})
export class SabethaComponent  {

  sabetha : any;

	// Get json data from raids-data.json
	constructor(rangService : RaidsService){
		rangService.getRaidGuideData().subscribe(data => {
			this.sabetha = data.json().sabetha.guide;
      console.log(this.sabetha);
		});
	
	
  }
  
}
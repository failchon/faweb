import { Component } from '@angular/core';
import { RaidsService } from '../../../../../services/index';

@Component({
  selector: 'samarog',
  templateUrl: 'samarog.component.html'
})
export class SamarogComponent  {

  samarog : any;

	// Get json data from raids-data.json
	constructor(rangService : RaidsService){
		rangService.getRaidGuideData().subscribe(data => {
			this.samarog = data.json().samarog.guide;
      console.log(this.samarog);
		});
	
	
  }
  
}
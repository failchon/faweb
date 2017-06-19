import { Component } from '@angular/core';
import { RaidsService } from '../../../../../services/index';

@Component({
  selector: 'vg',
  templateUrl: 'vg.component.html'
})
export class VgComponent  {

  vg : any;

	// Get json data from raids-data.json
	constructor(rangService : RaidsService){
		rangService.getRaidGuideData().subscribe(data => {
			this.vg = data.json().vg.guide;
      console.log(this.vg);
		});
	
	
  }
  
}
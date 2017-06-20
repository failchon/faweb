import { Component } from '@angular/core';
import { RaidsService } from '../../../../../services/index';

@Component({
  selector: 'mo',
  templateUrl: 'mo.component.html'
})
export class MoComponent  {

  mo : any;

	// Get json data from raids-data.json
	constructor(rangService : RaidsService){
		rangService.getRaidGuideData().subscribe(data => {
			this.mo = data.json().mo.guide;
      console.log(this.mo);
		});
	
	
  }
  
}
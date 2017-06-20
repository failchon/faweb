import { Component } from '@angular/core';
import { RaidsService } from '../../../../../services/index';

@Component({
  selector: 'kc',
  templateUrl: 'kc.component.html'
})
export class KcComponent  {

  kc : any;

	// Get json data from raids-data.json
	constructor(rangService : RaidsService){
		rangService.getRaidGuideData().subscribe(data => {
			this.kc = data.json().kc.guide;
      console.log(this.kc);
		});
	
	
  }
  
}
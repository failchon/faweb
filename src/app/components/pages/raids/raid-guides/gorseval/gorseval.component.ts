import { Component } from '@angular/core';
import { RaidsService } from '../../../../../services/index';

@Component({
  selector: 'gorseval',
  templateUrl: 'gorseval.component.html'
})
export class GorsevalComponent  {

  gorseval : any;

	// Get json data from raids-data.json
	constructor(rangService : RaidsService){
		rangService.getRaidGuideData().subscribe(data => {
			this.gorseval = data.json().gorseval.guide;
      console.log(this.gorseval);
		});
	
	
  }
  
}
import { Component } from '@angular/core';
import { RaidsService } from '../../../../../services/index';

@Component({
  selector: 'cairn',
  templateUrl: 'cairn.component.html'
})
export class CairnComponent  {

  cairn : any;

	// Get json data from raids-data.json
	constructor(rangService : RaidsService){
		rangService.getRaidGuideData().subscribe(data => {
			this.cairn = data.json().cairn.guide;
      console.log(this.cairn);
		});
	
	
  }
  
}
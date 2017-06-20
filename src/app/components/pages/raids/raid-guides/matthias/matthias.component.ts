import { Component } from '@angular/core';
import { RaidsService } from '../../../../../services/index';

@Component({
  selector: 'matthias',
  templateUrl: 'matthias.component.html'
})
export class MatthiasComponent  {

  matthias : any;

	// Get json data from raids-data.json
	constructor(rangService : RaidsService){
		rangService.getRaidGuideData().subscribe(data => {
			this.matthias = data.json().matthias.guide;
      console.log(this.matthias);
		});
	
	
  }
  
}
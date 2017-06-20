import { Component } from '@angular/core';
import { RaidsService } from '../../../../../services/index';

@Component({
  selector: 'deimos',
  templateUrl: 'deimos.component.html'
})
export class DeimosComponent  {

  deimos : any;

	// Get json data from raids-data.json
	constructor(rangService : RaidsService){
		rangService.getRaidGuideData().subscribe(data => {
			this.deimos = data.json().deimos.guide;
      console.log(this.deimos);
		});
	
	
  }
  
}
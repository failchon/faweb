import { Component } from '@angular/core';
import { RaidsService } from '../../../../../services/index';

@Component({
  selector: 'xera',
  templateUrl: 'xera.component.html'
})
export class XeraComponent  {

  xera : any;

	// Get json data from raids-data.json
	constructor(rangService : RaidsService){
		rangService.getRaidGuideData().subscribe(data => {
			this.xera = data.json().xera.guide;
      console.log(this.xera);
		});
	
	
  }
  
}
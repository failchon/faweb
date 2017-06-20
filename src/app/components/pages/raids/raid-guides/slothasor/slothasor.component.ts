import { Component } from '@angular/core';
import { RaidsService } from '../../../../../services/index';

@Component({
  selector: 'slothasor',
  templateUrl: 'slothasor.component.html'
})
export class SlothasorComponent  {

  slothasor : any;

	// Get json data from raids-data.json
	constructor(rangService : RaidsService){
		rangService.getRaidGuideData().subscribe(data => {
			this.slothasor = data.json().slothasor.guide;
      console.log(this.slothasor);
		});
	
	
  }
  
}
import { Component } from '@angular/core';
import { DiscordService } from '../../../../services/index';
import { Observable } from 'rxjs';

@Component({
  selector: 'setup',
  templateUrl: 'setup.component.html'
})
export class SetupComponent  {

	data : any;
	secondSetup: any;
	secondSetupInner:any;

	constructor(rangService : DiscordService){
		rangService.getAboutData().subscribe(data => {
			this.data = data.json().setup.firstSetup;
			this.secondSetup = data.json().setup.secondSetup;
			this.secondSetupInner = data.json().setup.secondSetup.descriptionInner;
		});

 }

}


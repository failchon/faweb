import { Component } from '@angular/core';
import { DiscordService } from '../../../../services/index';
import { Observable } from 'rxjs';

@Component({
  selector: 'discordrules',
  templateUrl: 'rules.component.html'
})
export class DiscordRulesComponent  {

	data : any;
	firstrules: any;
	secondrules:any;
	secondrulesInner: any;
	thirdrules:any;
	thirdrulesInner: any;
	fourthrules: any;

	constructor(rangService : DiscordService){
		rangService.getAboutData().subscribe(data => {
			this.data = data.json().rules;
			this.firstrules = data.json().rules.firstrules;
			this.secondrules = data.json().rules.secondrules;
			this.secondrulesInner = data.json().rules.secondrules.secondrulesInner;
			this.thirdrules = data.json().rules.thirdrules;
			this.thirdrulesInner = data.json().rules.thirdrules.thirdrulesInner;
			this.fourthrules = data.json().rules.fourthrules;
		});

 }

}


import { Component } from '@angular/core';
import { DiscordService } from '../../../../services/index';
import { Observable } from 'rxjs';

@Component({
  selector: 'join',
  templateUrl: 'join.component.html'
})
export class JoinComponent  {

	data : any;

	constructor(rangService : DiscordService){
		rangService.getAboutData().subscribe(data => {
			this.data = data.json().join;
			console.log(this.data);

		});

 }

}


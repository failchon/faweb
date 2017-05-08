import { Component } from '@angular/core';
import { HomeService } from '../../../../services/index';
import { Observable } from 'rxjs';

@Component({
  selector: 'communicate',
  templateUrl: 'communicate.component.html'
})
export class CommunicateComponent  { 

	data : any;

	constructor(rangService : HomeService){
		rangService.getHomeData().subscribe(data => {
			this.data = data.json().communicate;
			console.log(this.data);

		});

 }
}


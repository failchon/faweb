import { Component } from '@angular/core';
import { HomeService } from '../../../../services/index';
import { Observable } from 'rxjs';

@Component({
  selector: 'enviroment',
  templateUrl: 'enviroment.component.html'
})
export class EnviromentComponent  { 

 data : any;

	constructor(rangService : HomeService){
		rangService.getHomeData().subscribe(data => {
			this.data = data.json().enviroment.enviromentDescription;
			console.log(this.data);

		});

 }

}


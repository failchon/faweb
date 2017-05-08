import { Component } from '@angular/core';
import { HomeService } from '../../../../services/index';
import { Observable } from 'rxjs';

@Component({
  selector: 'promo',
  templateUrl: 'promo.component.html'
})
export class PromoComponent  { 

	data : any;

	constructor(rangService : HomeService){
		rangService.getHomeData().subscribe(data => {
			this.data = data.json().promo.promoDesc;
			console.log(this.data);

		});

 }
}


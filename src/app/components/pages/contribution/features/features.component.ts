import { Component } from '@angular/core';
import { ContributionService } from '../../../../services/index';
import { Observable } from 'rxjs';

@Component({
  selector: 'features',
  templateUrl: 'features.component.html'
})
export class FeaturesComponent  {

	data : any;
	map : any;
	gather:any;
	karma:any;
	magic:any;
	xp:any;
	pvptrack:any;
	wxp:any;
	wvwtrack:any;
	tavernimagepath: any;
	nodesimagepath: any;
	moreimagepath: any;

	constructor(rangService : ContributionService){
		rangService.getGw2ApiCraftingBoost().subscribe(data => {
			this.data = data.json();
			console.log(this.data);

		});
		rangService.getGw2ApiMapBonus().subscribe(map => {
			this.map = map.json();
			console.log(this.map);

		});
		rangService.getGw2ApiGatherBonus().subscribe(gather => {
			this.gather = gather.json();
			console.log(this.gather);

		});
		rangService.getGw2ApiKarmaBoost().subscribe(karma => {
			this.karma = karma.json();
			console.log(this.karma);

		});
		rangService.getGw2ApiMagicFind().subscribe(magic => {
			this.magic = magic.json();
			console.log(this.magic);

		});
		rangService.getGw2ApiXpGain().subscribe(xp => {
			this.xp = xp.json();
			console.log(this.xp);

		});
		rangService.getGw2ApiPvPTrack().subscribe(pvptrack => {
			this.pvptrack = pvptrack.json();
			console.log(this.pvptrack);

		});
		rangService.getGw2ApiWxpGain().subscribe(wxp => {
			this.wxp = wxp.json();
			console.log(this.wxp);

		});
		rangService.getGw2ApiWvwTrack().subscribe(wvwtrack => {
			this.wvwtrack = wvwtrack.json();
			console.log(this.wvwtrack);

		});
 }

}


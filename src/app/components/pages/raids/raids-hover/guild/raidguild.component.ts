import { Component } from '@angular/core';
import { RaidsService } from '../../../../../services/index';

@Component({
  selector: 'raidguild',
  templateUrl: 'raidguild.component.html'
})
export class RaidGuildComponent  {
    raidguild : any; 
    wing1 : any;
    boss_wing1: any;
    wing2 : any;
    boss_wing2: any;
    wing3 : any;
    boss_wing3: any;
    wing4 : any;
    boss_wing4: any;

	//retrive data from home-data.json
	constructor(rangService : RaidsService){
		rangService.getAboutData().subscribe(data => {
      this.raidguild = data.json().raidguild;
			this.wing1 = data.json().raidguild.wing1;
      this.boss_wing1 = data.json().raidguild.boss_wing1;
      this.wing2 = data.json().raidguild.wing2;
      this.boss_wing2 = data.json().raidguild.boss_wing2;
      this.wing3 = data.json().raidguild.wing3;
      this.boss_wing3 = data.json().raidguild.boss_wing3;
      this.wing4 = data.json().raidguild.wing4;
      this.boss_wing4 = data.json().raidguild.boss_wing4;
		});
 }
}
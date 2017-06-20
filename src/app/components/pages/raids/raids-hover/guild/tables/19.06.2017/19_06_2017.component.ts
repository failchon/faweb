import { Component } from '@angular/core';
import { RaidsService } from '../../../../../../../services/index';

@Component({
  selector: 'rd-19-06-2017',
  templateUrl: '19_06_2017.component.html'
})
export class RD_19_06_2017Component  {
    name:string;
    showHide2:boolean;
    raidguild : any; 
    wing1 : string;
    boss_wing1: string;
    wing2 : string;
    boss_wing2: string;
    wing3 : string;
    boss_wing3: string;
    wing4 : string;
    boss_wing4: string;

	//retrive data from home-data.json
	constructor(rangService : RaidsService){
    this.showHide2 = false;
    
		rangService.getRaidGuildData().subscribe(data => {
            this.raidguild = data.json().raidguild_19_june_2017;
            this.wing1 = data.json().raidguild_19_june_2017.wing1;
            this.boss_wing1 = data.json().raidguild_19_june_2017.boss_wing1;
            this.wing2 = data.json().raidguild_19_june_2017.wing2;
            this.boss_wing2 = data.json().raidguild_19_june_2017.boss_wing2;
            this.wing3 = data.json().raidguild_19_june_2017.wing3;
            this.boss_wing3 = data.json().raidguild_19_june_2017.boss_wing3;
            this.wing4 = data.json().raidguild_19_june_2017.wing4;
            this.boss_wing4 = data.json().raidguild_19_june_2017.boss_wing4;
		});
 }

changeShowStatus2(){
    this.showHide2 = !this.showHide2;
  }
}
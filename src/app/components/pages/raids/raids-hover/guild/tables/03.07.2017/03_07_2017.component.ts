import { Component, Input, ViewContainerRef } from '@angular/core';
import { RaidsService } from '../../../../../../../services/index';

@Component({
  selector: 'rd-03-07-2017',
  templateUrl: '03_07_2017.component.html'
})
export class RD_O3_07_2017Component  {
    name:string;
    showHide:boolean;
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
     this.showHide = false;
    
		rangService.getRaidGuildData().subscribe(data => {
            this.raidguild = data.json().raidguild_03_july_2017;
            this.wing1 = data.json().raidguild_03_july_2017.wing1;
            this.boss_wing1 = data.json().raidguild_03_july_2017.boss_wing1;
            this.wing2 = data.json().raidguild_03_july_2017.wing2;
            this.boss_wing2 = data.json().raidguild_03_july_2017.boss_wing2;
            this.wing3 = data.json().raidguild_03_july_2017.wing3;
            this.boss_wing3 = data.json().raidguild_03_july_2017.boss_wing3;
            this.wing4 = data.json().raidguild_03_july_2017.wing4;
            this.boss_wing4 = data.json().raidguild_03_july_2017.boss_wing4;
		});
 }

  changeShowStatus(){
    this.showHide = !this.showHide;
  }
}
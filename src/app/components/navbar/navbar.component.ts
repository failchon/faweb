import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.component.html'
})
export class NavbarComponent  { 
  public projectName:string;

  	constructor() {
  		this.projectName= "Fearless Alliance [FA]"
  	}

    isIn = false;   // store state
    toggleState() { // click handler
        let bool = this.isIn;
        this.isIn = bool === false ? true : false; 
    }
 }
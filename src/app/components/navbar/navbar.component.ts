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
 }
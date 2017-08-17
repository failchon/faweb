import { Component } from '@angular/core';
import { ContributionService } from '../../../../services/index';
import { Observable } from 'rxjs';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'contrib',
  templateUrl: 'contrib.component.html'
})
export class ContribComponent  {

constructor( private route: ActivatedRoute ) {}
  //this is used for the Donations and Features buttons
  //will redirect users on the same page but to the coresponding divs, when clicked
  /*onAnchorClick ( ) {
    this.route.fragment.subscribe ( f => {
      const element = document.querySelector ( "#" + f )
      if ( element ) element.scrollIntoView ( element )
    });
  }*/
  
}


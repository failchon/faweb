import { Component } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'contribution',
  templateUrl: 'contribution.component.html'
})
export class ContributionComponent  {
     constructor( private route: ActivatedRoute ) {}

onAnchorClick ( ) {
    this.route.fragment.subscribe ( f => {
      const element = document.querySelector ( "#" + f )
      if ( element ) element.scrollIntoView ( element )
    });
  }
 }
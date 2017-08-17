import { Component } from '@angular/core';
import { HomeService } from '../../services/index';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'footer-page',
  templateUrl: 'footer.component.html'
})
export class FooterComponent  { 

  constructor( private route: ActivatedRoute ) {}

/*onAnchorClick ( ) {
    this.route.fragment.subscribe ( f => {
      const element = document.querySelector ( "#" + f )
      if ( element ) element.scrollIntoView ( element )
    });
  }*/

}


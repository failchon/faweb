import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class AboutService {

	constructor(private http:Http) {

	
	}

	getAboutData () : Observable<any> {
		return this.http.get('assets/json/about-data.json');
		
	}

}
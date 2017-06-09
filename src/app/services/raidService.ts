import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class RaidsService {

	constructor(private http:Http) {

	
	}

	getAboutData () : Observable<any> {
		return this.http.get('assets/json/raids-data.json');
		
	}

	getRaidGuildData () : Observable<any> {
		return this.http.get('assets/json/raidguild-data.json');
		
	}
}
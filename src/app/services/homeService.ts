import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {
	constructor(private http:Http) {

	
	}

	getHomeData () : Observable<any> {
		return this.http.get("faweb/assets/json/home-data.json");
		
	}
}
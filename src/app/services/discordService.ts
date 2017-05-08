import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class DiscordService {

	constructor(private http:Http) {

	
	}

	getAboutData () : Observable<any> {
		return this.http.get('assets/json/discord-data.json');
		
	}

}
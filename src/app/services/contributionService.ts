import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ContributionService {

	constructor(private http:Http) {

	
	}

	getAboutData () : Observable<any> {
		return this.http.get('assets/json/contribution-data.json');
		
	}
	getGw2ApiGuild () : Observable<any> {
		return this.http.get('https://api.guildwars2.com/v2/guild/AB1A612D-3F15-E511-925A-AC162DAE5AD5?access_token=B356B271-6E5F-B24A-A3A3-1B2E3AA33490E3050F74-9006-49D4-B13D-775788420D87');
		
	}
	getGw2ApiCraftingBoost () : Observable<any> {
		return this.http.get('https://api.guildwars2.com/v2/items/76475');
		
	}
	getGw2ApiMapBonus () : Observable<any> {
		return this.http.get('https://api.guildwars2.com/v2/items/71959');
		
	}
	getGw2ApiGatherBonus () : Observable<any> {
		return this.http.get('https://api.guildwars2.com/v2/items/72641');
		
	}
	getGw2ApiKarmaBoost () : Observable<any> {
		return this.http.get('https://api.guildwars2.com/v2/items/71894');
		
	}
	getGw2ApiMagicFind () : Observable<any> {
		return this.http.get('https://api.guildwars2.com/v2/items/72371');
		
	}
	getGw2ApiXpGain () : Observable<any> {
		return this.http.get('https://api.guildwars2.com/v2/items/71771');
		
	}
	getGw2ApiPvPTrack () : Observable<any> {
		return this.http.get('https://api.guildwars2.com/v2/items/71024');
		
	}
	getGw2ApiWxpGain () : Observable<any> {
		return this.http.get('https://api.guildwars2.com/v2/items/70715');
		
	}
	getGw2ApiWvwTrack () : Observable<any> {
		return this.http.get('https://api.guildwars2.com/v2/items/78979');
		
	}

}
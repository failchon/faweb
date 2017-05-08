import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent,
		     EnviromentComponent,
		     PromoComponent,
		     CommunicateComponent,
		     EventsComponent } from './components/pages/home/index';
import { AboutComponent,
         UsComponent,
         MeetusComponent,
         RulesComponent } from './components/pages/about/index';
import { ContributionComponent,
         ContribComponent,
         DonationsComponent,
         FeaturesComponent } from './components/pages/contribution/index';
import { DiscordComponent,
         JoinComponent,
         SetupComponent,
         DiscordRulesComponent } from './components/pages/discord/index';
import { RaidComponent, 
         IntroductionComponent,
         EncounterComponent } from './components/pages/raids/index';

import {AboutService, 
        HomeService, 
        RaidsService, 
        ContributionService,
        DiscordService} from './services/index';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contribution', component: ContributionComponent },
  { path: 'discord', component: DiscordComponent },
  { path: 'raid', component: RaidComponent },
];

@NgModule({
  imports:      [ BrowserModule, 
  				        RouterModule.forRoot(appRoutes), 
  				        HttpModule ],

  declarations: [ AppComponent, 
      				    NavbarComponent,
                  FooterComponent, 
      				    HomeComponent, 
      				    AboutComponent, 
				          ContributionComponent, 
				          DiscordComponent, 
				          RaidComponent, 
				          EnviromentComponent, 
				          PromoComponent, 
				          CommunicateComponent,
				          EventsComponent,
                  UsComponent,
                  MeetusComponent,
                  RulesComponent,
                  IntroductionComponent,
                  EncounterComponent,
                  ContribComponent,
                  DonationsComponent,
                  FeaturesComponent,
                  JoinComponent,
                  SetupComponent,
                  DiscordRulesComponent ],

  providers : [   AboutService, 
                  HomeService,
                  RaidsService,
                  ContributionService,
                  DiscordService ],  

  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { IdlePreload, IdlePreloadModule } from '@angularclass/idle-preload';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { CommonModule } from '@angular/common';
import { DemoUtilsModule } from '../demo-utils/module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

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
         EncounterComponent,
         RaidGuildComponent,
         RD_O5_06_2017Component,
         RD_12_06_2017Component } from './components/pages/raids/index';

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
  { path: 'Guild Raid', component: RaidGuildComponent }
];

@NgModule({
  imports:      [ BrowserModule, 
  				        RouterModule.forRoot(appRoutes), 
  				        HttpModule,
                  BrowserAnimationsModule,
                  CommonModule,
                  CalendarModule.forRoot(),
                  DemoUtilsModule,
                  NgbModule,
                  NgxPaginationModule,
                  ModalModule.forRoot(),
                  BootstrapModalModule ],

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
                  DiscordRulesComponent,
                  RaidGuildComponent,
                  RD_O5_06_2017Component,
                  RD_12_06_2017Component ],

  providers : [   AboutService, 
                  HomeService,
                  RaidsService,
                  ContributionService,
                  DiscordService ],  

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
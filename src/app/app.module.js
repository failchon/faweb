"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var navbar_component_1 = require('./components/navbar/navbar.component');
var footer_component_1 = require('./components/footer/footer.component');
var index_1 = require('./components/pages/home/index');
var index_2 = require('./components/pages/about/index');
var contribution_component_1 = require('./components/pages/contribution/contribution.component');
var discord_component_1 = require('./components/pages/discord/discord.component');
var index_3 = require('./components/pages/raids/index');
var index_4 = require('./services/index');
var appRoutes = [
    { path: 'home', component: index_1.HomeComponent },
    { path: 'about', component: index_2.AboutComponent },
    { path: 'contribution', component: contribution_component_1.ContributionComponent },
    { path: 'discord', component: discord_component_1.DiscordComponent },
    { path: 'raid', component: index_3.RaidComponent },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(appRoutes),
                http_1.HttpModule],
            declarations: [app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                footer_component_1.FooterComponent,
                index_1.HomeComponent,
                index_2.AboutComponent,
                contribution_component_1.ContributionComponent,
                discord_component_1.DiscordComponent,
                index_3.RaidComponent,
                index_1.EnviromentComponent,
                index_1.PromoComponent,
                index_1.CommunicateComponent,
                index_1.EventsComponent,
                index_2.UsComponent,
                index_2.MeetusComponent,
                index_2.RulesComponent,
                index_3.IntroductionComponent,
                index_3.EncounterComponent],
            providers: [index_4.AboutService,
                index_4.HomeService,
                index_4.RaidsService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
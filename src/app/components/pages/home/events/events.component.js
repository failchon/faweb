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
var EventsComponent = (function () {
    function EventsComponent() {
        this.h = new Date(2017, 2, 5);
        this.missions = new Date(2017, 2, 5);
        this.firstwing = this.missions.setDate(this.missions.getDate() + 1);
        this.secondwing = this.missions.setDate(this.missions.getDate() + 1);
        this.thirdwing = this.missions.setDate(this.missions.getDate() + 1);
        this.fourthwing = this.missions.setDate(this.missions.getDate() + 1);
        this.tab = 0;
    }
    EventsComponent.prototype.getStyle = function () {
        var d = new Date(2017, 2, 5);
        if (d) {
            return "green";
        }
        else {
            return "white";
        }
    };
    EventsComponent.prototype.setTab = function (num) {
        this.tab = num;
    };
    EventsComponent = __decorate([
        core_1.Component({
            selector: 'events',
            templateUrl: './app/components/pages/home/events/events.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], EventsComponent);
    return EventsComponent;
}());
exports.EventsComponent = EventsComponent;
//# sourceMappingURL=events.component.js.map
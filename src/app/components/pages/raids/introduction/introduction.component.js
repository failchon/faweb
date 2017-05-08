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
var index_1 = require('../../../../services/index');
var IntroductionComponent = (function () {
    function IntroductionComponent(rangService) {
        var _this = this;
        rangService.getAboutData().subscribe(function (data) {
            _this.data = data.json().dedication;
            _this.title = data.json();
            _this.ready = data.json().ready;
            _this.descriptionList = data.json().ready.descriptionList;
            _this.option = data.json().ready.descriptionList.option;
            _this.descriptionList2 = data.json().ready.descriptionList2;
            _this.descriptionList3 = data.json().ready.descriptionList3;
            _this.option2 = data.json().ready.descriptionList3.option;
            _this.involved = data.json().involved;
            _this.notes = data.json().notes;
            _this.notes2 = data.json().notes.descriptionList;
            console.log(_this.data);
        });
    }
    IntroductionComponent = __decorate([
        core_1.Component({
            selector: 'introduction',
            templateUrl: './app/components/pages/raids/introduction/introduction.component.html'
        }), 
        __metadata('design:paramtypes', [index_1.RaidsService])
    ], IntroductionComponent);
    return IntroductionComponent;
}());
exports.IntroductionComponent = IntroductionComponent;
//# sourceMappingURL=introduction.component.js.map
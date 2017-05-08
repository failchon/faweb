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
var RulesComponent = (function () {
    function RulesComponent(rangService) {
        var _this = this;
        rangService.getAboutData().subscribe(function (data) {
            _this.data = data.json().rules;
            console.log(_this.data);
        });
    }
    RulesComponent = __decorate([
        core_1.Component({
            selector: 'rules',
            templateUrl: './app/components/pages/about/rules/rules.component.html'
        }), 
        __metadata('design:paramtypes', [index_1.AboutService])
    ], RulesComponent);
    return RulesComponent;
}());
exports.RulesComponent = RulesComponent;
//# sourceMappingURL=rules.component.js.map
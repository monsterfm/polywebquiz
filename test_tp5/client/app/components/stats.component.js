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
var StatsComponent = (function () {
    function StatsComponent() {
    }
    StatsComponent.prototype.reset = function () {
        localStorage.clear();
        //moyenneExamens(); //du tp4 (changera le message du reset )
        var stats = document.getElementById('stats');
        console.log(stats); //prints your element
        stats.innerHTML = "Aucun examen n'a encore ete fait!";
    };
    StatsComponent = __decorate([
        core_1.Component({
            selector: 'stats',
            templateUrl: '../templates/stats'
        }), 
        __metadata('design:paramtypes', [])
    ], StatsComponent);
    return StatsComponent;
}());
exports.StatsComponent = StatsComponent;
//# sourceMappingURL=stats.component.js.map
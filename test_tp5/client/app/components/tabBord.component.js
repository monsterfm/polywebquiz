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
//import {QuestionService} from '../services/Question.service'
var TabBordComponent = (function () {
    function TabBordComponent() {
        this.examData = { "domainChoice": 'domaine', "examNumber": "nombre", "nbCorrectAnswers": 0 };
        this.testData = { "nbCorrectAnswers": 0, "counter": 0 };
        this.domaines = ["HTML", "CSS", "JavaScript", "Continuer"];
        this.examNumbers = ["1", "2", "3", "4", "5", "6", "7", "8"];
        this.resetMsg = '';
    }
    TabBordComponent.prototype.saveExamData = function (value) {
        console.log(value);
        sessionStorage.clear();
        sessionStorage.setItem('domainChoice', value.domaine);
        sessionStorage.setItem('examNumber', value.nombre);
        sessionStorage.setItem('nbCorrectAnswers', "0");
        //this.moyenneExamens();
    };
    TabBordComponent.prototype.startTestRapide = function () {
        console.log("value");
        sessionStorage.clear();
        sessionStorage.setItem('nbCorrectAnswers', this.testData.nbCorrectAnswers.toString());
        sessionStorage.setItem('counter', this.testData.counter.toString());
        //this.moyenneExamens();
    };
    TabBordComponent = __decorate([
        core_1.Component({
            selector: 'tabBord',
            templateUrl: '../templates/tabBord',
        }), 
        __metadata('design:paramtypes', [])
    ], TabBordComponent);
    return TabBordComponent;
}());
exports.TabBordComponent = TabBordComponent;
//# sourceMappingURL=tabBord.component.js.map
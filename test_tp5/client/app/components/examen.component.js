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
var Question_service_1 = require('../services/Question.service');
var Examen_service_1 = require('../services/Examen.service');
var Question_1 = require('../services/Question');
var ExamenComponent = (function () {
    function ExamenComponent(_questionService, _examenService) {
        this._questionService = _questionService;
        this._examenService = _examenService;
        this.question = new Question_1.Question('id', 'domaine', 'question', ['choix1', 'choix2', 'choix3'], 'Correctanswer');
    }
    ExamenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._questionService.getQuestion()
            .subscribe(function (responseRandomQuestion) { return _this.question = responseRandomQuestion; });
    };
    ExamenComponent = __decorate([
        core_1.Component({
            selector: 'examen',
            templateUrl: '../templates/examen',
            providers: [Question_service_1.QuestionService, Examen_service_1.ExamenService]
        }), 
        __metadata('design:paramtypes', [Question_service_1.QuestionService, Examen_service_1.ExamenService])
    ], ExamenComponent);
    return ExamenComponent;
}());
exports.ExamenComponent = ExamenComponent;
//# sourceMappingURL=examen.component.js.map
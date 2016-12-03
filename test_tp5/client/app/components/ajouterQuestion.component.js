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
var Question_1 = require('../services/Question');
var Question_service_1 = require('../services/Question.service');
var AjouterQuestionComponent = (function () {
    function AjouterQuestionComponent(_questionService) {
        this._questionService = _questionService;
        this.question = new Question_1.Question('', '', '', ['', '', ''], '');
        this.responsePostForm = {};
        this.nbHTML = 0;
        this.nbCSS = 0;
        this.nbJS = 0;
        this.reponseInutile = {};
        this.domaines = ["HTML", "CSS", "JavaScript"];
    }
    AjouterQuestionComponent.prototype.ajouterQuestion = function (value) {
        var _this = this;
        console.log(value);
        var questionToadd = new Question_1.Question('', value.domaine, value.question, [value.response1, value.response2, value.response3], value.goodres);
        console.log(questionToadd);
        this._questionService.ajouterQuestion(questionToadd)
            .subscribe(function (res) { return _this.responsePostForm = res; });
    };
    //todo:why doesn't return the right number?
    // getNbHTMLQuestions(){
    // 	 this._questionService.getNbHTMLQuestions()
    // 		.subscribe(res =>this.nbHTML= res)
    // 	console.log("this.nbHTML")
    // 	console.log(this.nbHTML)
    // }
    // getNbCSSQuestions(){
    // 	this._questionService.getNbCSSQuestions()
    // 		.subscribe(res =>this.nbCSS= res)
    // 	}
    // getNbJSQuestions(){
    // 	this._questionService.getNbJSQuestions()
    // 		.subscribe(res =>this.nbJS= res)
    // }
    AjouterQuestionComponent.prototype.viderDB = function () {
        var _this = this;
        this._questionService.viderDB()
            .subscribe(function (res) { return _this.reponseInutile = res; });
    };
    AjouterQuestionComponent = __decorate([
        core_1.Component({
            selector: 'ajouterQuestion',
            templateUrl: '../templates/ajouterQuestion',
            providers: [Question_service_1.QuestionService]
        }), 
        __metadata('design:paramtypes', [Question_service_1.QuestionService])
    ], AjouterQuestionComponent);
    return AjouterQuestionComponent;
}());
exports.AjouterQuestionComponent = AjouterQuestionComponent;
//# sourceMappingURL=ajouterQuestion.component.js.map
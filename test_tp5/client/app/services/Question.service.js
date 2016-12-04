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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var QuestionService = (function () {
    function QuestionService(_http) {
        this._http = _http;
        this.basicUrl = '/ajax';
        this.draggable = true;
    }
    //test questions
    QuestionService.prototype.getQuestion = function () {
        return this._http.get(this.basicUrl + '/question')
            .map(function (response) { return response.json(); });
    };
    //html questions
    QuestionService.prototype.getHTMLQuestion = function () {
        return this._http.get(this.basicUrl + '/questionHTML')
            .map(function (response) { return response.json(); });
    };
    //CSS questions
    QuestionService.prototype.getCSSQuestion = function () {
        return this._http.get(this.basicUrl + '/questionCSS')
            .map(function (response) { return response.json(); });
    };
    //JS questions
    QuestionService.prototype.getJSQuestion = function () {
        return this._http.get(this.basicUrl + '/questionJavaScript')
            .map(function (response) { return response.json(); });
    };
    //add question
    QuestionService.prototype.ajouterQuestion = function (body) {
        return this._http.post(this.basicUrl + '/ajouterQuestion', body)
            .map(function (response) { return response; });
    };
    QuestionService.prototype.getNbHTMLQuestions = function () {
        return this._http.get(this.basicUrl + '/nbreQuestionsHTML')
            .map(function (response) { return response.json(); });
    };
    QuestionService.prototype.getNbCSSQuestions = function () {
        return this._http.get(this.basicUrl + '/nbreQuestionsCSS')
            .map(function (response) { return response.json(); });
    };
    QuestionService.prototype.getNbJSQuestions = function () {
        return this._http.get(this.basicUrl + '/nbreQuestionsJS')
            .map(function (response) { return response.json(); });
    };
    QuestionService.prototype.viderDB = function () {
        return this._http.delete(this.basicUrl + '/delete')
            .map(function (response) { return response.json(); });
    };
    QuestionService.prototype.saveInDb = function (body) {
        return this._http.post(this.basicUrl + '/saveInDb', body)
            .map(function (response) { return response.json(); });
    };
    QuestionService.prototype.getResultsTest = function () {
        return this._http.get(this.basicUrl + '/resultsTest')
            .map(function (response) { return response.json(); });
    };
    QuestionService.prototype.getResultsExams = function () {
        return this._http.get(this.basicUrl + '/resultsExams')
            .map(function (response) { return response.json(); });
    };
    QuestionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], QuestionService);
    return QuestionService;
}());
exports.QuestionService = QuestionService;
//# sourceMappingURL=Question.service.js.map
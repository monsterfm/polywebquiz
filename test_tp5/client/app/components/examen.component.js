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
        this.draggable = true;
    }
    ExamenComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem('domainChoice') == "HTML") {
            this.getHTMLQuestion();
        }
        else if (sessionStorage.getItem('domainChoice') == "CSS") {
            this.getCSSQuestion();
        }
        else if (sessionStorage.getItem('domainChoice') == "JavaScript") {
            this.getJSQuestion();
        }
        else {
            // this._questionService.getQuestion()
            // .subscribe(responseRandomQuestion =>this.question = responseRandomQuestion);
            alert("Please verify that you entered a valid domain");
        }
    };
    ExamenComponent.prototype.getQuestion = function () {
        if (sessionStorage.getItem('domainChoice') == "HTML") {
            this.getHTMLQuestion();
        }
        else if (sessionStorage.getItem('domainChoice') == "CSS") {
            this.getCSSQuestion();
        }
        else if (sessionStorage.getItem('domainChoice') == "JavaScript") {
            this.getJSQuestion();
        }
    };
    ExamenComponent.prototype.getHTMLQuestion = function () {
        var _this = this;
        var rep = document.getElementById("reponse");
        rep.style.border = "5px solid black";
        this.counter = parseInt(sessionStorage.getItem('counter') || 1);
        this.counter = parseInt(sessionStorage.getItem('counter')) + 1;
        sessionStorage.setItem('counter', this.counter);
        this.draggable = true;
        this._questionService.getHTMLQuestion()
            .subscribe(function (responseRandomQuestion) { return _this.question = responseRandomQuestion; });
    };
    ExamenComponent.prototype.getCSSQuestion = function () {
        var _this = this;
        var rep = document.getElementById("reponse");
        rep.style.border = "5px solid black";
        this.counter = parseInt(sessionStorage.getItem('counter') || 1);
        this.counter = parseInt(sessionStorage.getItem('counter')) + 1;
        sessionStorage.setItem('counter', this.counter);
        this.draggable = true;
        this._questionService.getCSSQuestion()
            .subscribe(function (responseRandomQuestion) { return _this.question = responseRandomQuestion; });
    };
    ExamenComponent.prototype.getJSQuestion = function () {
        var _this = this;
        var rep = document.getElementById("reponse");
        rep.style.border = "5px solid black";
        this.counter = parseInt(sessionStorage.getItem('counter') || 1);
        this.counter = parseInt(sessionStorage.getItem('counter')) + 1;
        sessionStorage.setItem('counter', this.counter);
        this.draggable = true;
        this._questionService.getJSQuestion()
            .subscribe(function (responseRandomQuestion) { return _this.question = responseRandomQuestion; });
    };
    ExamenComponent.prototype.retourExamen = function () {
    };
    ExamenComponent.prototype.abandonner = function () {
    };
    ExamenComponent.prototype.saveExam = function () {
    };
    ExamenComponent.prototype.onDragStart = function (event, $i) {
        event.dataTransfer.setData('text/plain', null);
        if (this.draggable) {
            this.dragStarted = event.target;
            this.selectedAnswer = $i;
        }
    };
    ExamenComponent.prototype.onDragOver = function (event) {
        if (this.draggable) {
            event.preventDefault();
        }
    };
    ExamenComponent.prototype.isDraggable = function () {
        return this.draggable;
    };
    ExamenComponent.prototype.onDrop = function (event) {
        if (this.draggable) {
            event.preventDefault();
            if (event.target.className == "reponse") {
                this.dragStarted.parentNode.removeChild(this.dragStarted);
                event.target.appendChild(this.dragStarted);
                this.draggable = false;
                //check here the response by ajax by subscribing here to the service :we should be able to get the good response of the question
                console.log(parseInt(this.question.Correctanswer));
                console.log(this.selectedAnswer);
                if (this.selectedAnswer == this.question.Correctanswer) {
                    var rep = document.getElementById("reponse");
                    rep.style.border = "5px solid green";
                    this.nbCorrectAnswers = parseInt(sessionStorage.getItem('nbCorrectAnswers') || 0) + 1;
                    sessionStorage.setItem('nbCorrectAnswers', this.nbCorrectAnswers);
                }
                else {
                    var rep = document.getElementById("reponse");
                    rep.style.border = "5px solid red";
                }
            }
        }
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
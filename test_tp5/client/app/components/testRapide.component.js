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
var Question_1 = require('../services/Question');
var TestRapideComponent = (function () {
    function TestRapideComponent(_questionService) {
        this._questionService = _questionService;
        this.question = new Question_1.Question('id', 'domaine', 'question', ['choix1', 'choix2', 'choix3'], 'Correctanswer');
        this.rep = {}; //valid for not usable response observer
        this.draggable = true;
        this.style = "solid";
    }
    TestRapideComponent.prototype.ngOnInit = function () {
        this.getTestQuestion();
    };
    TestRapideComponent.prototype.getTestQuestion = function () {
        var _this = this;
        this.draggable = true; //shoud be draggable for next question
        this._questionService.getQuestion()
            .subscribe(function (responseRandomQuestion) { return _this.question = responseRandomQuestion; });
    };
    TestRapideComponent.prototype.onDragStart = function (event) {
        event.dataTransfer.setData('text/plain', null);
        if (this.draggable) {
            this.dragStarted = event.target;
        }
    };
    TestRapideComponent.prototype.onDragOver = function (event) {
        if (this.draggable) {
            event.preventDefault();
        }
    };
    TestRapideComponent.prototype.isDraggable = function () {
        return this.draggable;
    };
    TestRapideComponent.prototype.onDrop = function (event) {
        if (this.draggable) {
            event.preventDefault();
            if (event.target.className == "reponse") {
                this.dragStarted.parentNode.removeChild(this.dragStarted);
                event.target.appendChild(this.dragStarted);
                this.draggable = false;
            }
        }
    };
    TestRapideComponent = __decorate([
        core_1.Component({
            selector: 'testrapide',
            templateUrl: '../templates/testRapide',
            providers: [Question_service_1.QuestionService]
        }), 
        __metadata('design:paramtypes', [Question_service_1.QuestionService])
    ], TestRapideComponent);
    return TestRapideComponent;
}());
exports.TestRapideComponent = TestRapideComponent;
//# sourceMappingURL=testRapide.component.js.map
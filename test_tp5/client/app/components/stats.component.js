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
var ResultatsTest_1 = require('../services/ResultatsTest');
var StatsComponent = (function () {
    function StatsComponent(_questionService) {
        this._questionService = _questionService;
        this.reponseTest = new ResultatsTest_1.ResultatsTest('nbCorrectAnswers', 'totalCounter');
        this.reponseExam = {};
        this.resultTest = "";
        this.nbrQuestionRapide = 0;
        this.nbrQuestionTotal = 0;
    }
    StatsComponent.prototype.ngOnInit = function () {
        this.getResultatTest();
        this.getResultatExam();
    };
    StatsComponent.prototype.getResultatTest = function () {
        var _this = this;
        this._questionService.getResultsTest()
            .subscribe(function (responseRandomQuestion) {
            _this.reponseTest = responseRandomQuestion;
            _this.afficherResultats();
        });
    };
    StatsComponent.prototype.getResultatExam = function () {
        var _this = this;
        this._questionService.getResultsExams()
            .subscribe(function (responseRandomQuestion) {
            _this.reponseExam = responseRandomQuestion;
            _this.afficherResultatsExam();
        });
    };
    StatsComponent.prototype.afficherResultats = function () {
        if (this.reponseTest.nbCorrectAnswers == "nbCorrectAnswers") {
            this.resultTest = "Statistiques test rapide : 0 / 0";
            var statstest = document.getElementById('statstest');
            console.log(statstest); //prints your element
            statstest.innerHTML = "Statistiques test rapide : 0 / 0";
        }
        else {
            for (this.i in this.reponseTest) {
                this.nbrQuestionRapide = this.nbrQuestionRapide + (parseInt(this.reponseTest[this.i].nbCorrectAnswers));
                this.nbrQuestionTotal = this.nbrQuestionTotal + (parseInt(this.reponseTest[this.i].totalCounter));
            }
            this.resultTest = "Statistiques test rapide : " + this.nbrQuestionRapide + "/ " + this.nbrQuestionTotal;
            var statstest = document.getElementById('statstest');
            console.log(statstest); //prints your element
            statstest.innerHTML = this.resultTest;
        }
    };
    StatsComponent.prototype.afficherResultatsExam = function () {
        //Todo:Afficher les resultats des examens
        console.log(this.reponseExam);
    };
    StatsComponent.prototype.reset = function () {
        localStorage.clear();
        //moyenneExamens(); //du tp4 (changera le message du reset )
        var stats = document.getElementById('stats');
        console.log(stats); //prints your element
        stats.innerHTML = "Aucun examen n'a encore ete fait!";
        //CRER VARIABLE PRIVATE statstest et stats comme dans 
        //FAIRE une variable examen qui comporte les donnes de la bd
    };
    StatsComponent = __decorate([
        core_1.Component({
            selector: 'stats',
            templateUrl: '../templates/stats',
            providers: [Question_service_1.QuestionService]
        }), 
        __metadata('design:paramtypes', [Question_service_1.QuestionService])
    ], StatsComponent);
    return StatsComponent;
}());
exports.StatsComponent = StatsComponent;
//# sourceMappingURL=stats.component.js.map
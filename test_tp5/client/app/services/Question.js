"use strict";
var Question = (function () {
    function Question(id, domaine, question, choices, Correctanswer) {
        this.id = id;
        this.domaine = domaine;
        this.question = question;
        this.choices = choices;
        this.Correctanswer = Correctanswer;
    }
    return Question;
}());
exports.Question = Question;
//# sourceMappingURL=Question.js.map
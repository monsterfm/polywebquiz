
import { Component } from '@angular/core';
import { Question } from '../services/Question';
import {QuestionService} from '../services/Question.service'

@Component({
    selector: 'ajouterQuestion',
    templateUrl: '../templates/ajouterQuestion',
    providers:[QuestionService]
})

export class AjouterQuestionComponent {
	question = new Question('','','',['','',''],'');
	responsePostForm={}
	 nbHTML=0;
	 nbCSS=0;
	 nbJS=0;
	 reponseInutile={}
	constructor(private _questionService: QuestionService){

	}
	private domaines=["HTML","CSS","JavaScript"];
	ajouterQuestion(value){

		console.log(value)
		let questionToadd = new Question('',value.domaine,value.question,[value.response1,value.response2,value.response3],value.goodres)
		console.log(questionToadd)
		this._questionService.ajouterQuestion(questionToadd)
			.subscribe(res =>this.responsePostForm = res)

	}
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

	viderDB(){
		this._questionService.viderDB()
			.subscribe(res =>this.reponseInutile= res)

	}

}
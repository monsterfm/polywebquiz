
import { Component,OnInit } from '@angular/core';
import {QuestionService} from '../services/Question.service'
import {ExamenService} from '../services/Examen.service'
import{Question} from '../services/Question'



@Component({
    selector: 'examen',
    templateUrl: '../templates/examen',
    providers:[QuestionService,ExamenService]
})

export class ExamenComponent implements OnInit {
	question = new Question('id','domaine','question',['choix1','choix2','choix3'],'Correctanswer');
	

	constructor(private _questionService: QuestionService,private _examenService:ExamenService){

	}
	ngOnInit(){
		this._questionService.getQuestion()
			.subscribe(responseRandomQuestion =>this.question = responseRandomQuestion)
		
	}
	// getTestQuestion(){
	// 	this._questionService.getQuestion()
	// 		.subscribe(responseRandomQuestion =>this.question = responseRandomQuestion)

	// }
	// getHTMLQuestion(){

	// 	this._questionService.getHTMLQuestion()
	// 		.subscribe(responseRandomQuestion =>this.question = responseRandomQuestion)

	// }
	// getCSSQuestion(){
	// 	this._questionService.getCSSQuestion()
	// 		.subscribe(responseRandomQuestion =>this.question = responseRandomQuestion)

	// }

	// getJSQuestion(){
	// 	this._questionService.getJSQuestion()
	// 		.subscribe(responseRandomQuestion =>this.question = responseRandomQuestion)

	// }

}

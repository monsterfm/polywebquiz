
import { Component ,OnInit} from '@angular/core';
import {QuestionService} from '../services/Question.service'
import{Question} from '../services/Question'



@Component({
    selector: 'testrapide',
    templateUrl: '../templates/testRapide',
    providers:[QuestionService]
})

export class TestRapideComponent implements OnInit{
	question = new Question('id','domaine','question',['choix1','choix2','choix3'],'Correctanswer');
	constructor(private _questionService: QuestionService){

	}
	ngOnInit(){
		this.getTestQuestion()
		
	}
	getTestQuestion(){
		this._questionService.getQuestion()
			.subscribe(responseRandomQuestion =>this.question = responseRandomQuestion)

	}


}

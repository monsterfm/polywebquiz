
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
	private draggable = true;
	private dragStarted;

	constructor(private _questionService: QuestionService,private _examenService:ExamenService){

	}
	ngOnInit(){
		
		if(sessionStorage.getItem('domainChoice') =="HTML"){
			this.getHTMLQuestion();
		}
		else if(sessionStorage.getItem('domainChoice') =="CSS"){
			this.getCSSQuestion();
		}
		else if(sessionStorage.getItem('domainChoice') =="JavaScript"){
			this.getJSQuestion();
		}
		else{
			this._questionService.getQuestion()
			.subscribe(responseRandomQuestion =>this.question = responseRandomQuestion);
		}
		
	}
	//getTestQuestion(){
	//	this._questionService.getQuestion()
	//	.subscribe(responseRandomQuestion =>this.question = responseRandomQuestion)

	//}
	getHTMLQuestion(){

	 	this._questionService.getHTMLQuestion()
	 		.subscribe(responseRandomQuestion =>this.question = responseRandomQuestion)

	 }
	 getCSSQuestion(){
	 	this._questionService.getCSSQuestion()
	 		.subscribe(responseRandomQuestion =>this.question = responseRandomQuestion)

	 }

	 getJSQuestion(){
	 	this._questionService.getJSQuestion()
	 		.subscribe(responseRandomQuestion =>this.question = responseRandomQuestion)

	 }

	 onDragStart(event){
		event.dataTransfer.setData('text/plain',null)
        if (this.draggable){
            this.dragStarted = event.target;
        }  
    }
    
    onDragOver(event){
        if (this.draggable){
            event.preventDefault();
        }
    }
    
   
    isDraggable(){
        return this.draggable;
    }
    
    onDrop(event){
        if (this.draggable){
            event.preventDefault();
            if ( event.target.className == "reponse" ) {
                this.dragStarted.parentNode.removeChild( this.dragStarted );
                event.target.appendChild( this.dragStarted );
                this.draggable = false;

                //check here the response by ajax by subscribing here to the service :we should be able to get the good response of the question
            }
        }
    }

}

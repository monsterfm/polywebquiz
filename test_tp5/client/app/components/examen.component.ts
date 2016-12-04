
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
	private selectedAnswer;
    private counter;
    private nbCorrectAnswers;

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
			// this._questionService.getQuestion()
			// .subscribe(responseRandomQuestion =>this.question = responseRandomQuestion);
			alert("Please verify that you entered a valid domain")
			//TODO:should not go to the next page
		}
		
	}
	getQuestion(){
		if(sessionStorage.getItem('domainChoice') =="HTML"){
			this.getHTMLQuestion();
		}
		else if(sessionStorage.getItem('domainChoice') =="CSS"){
			this.getCSSQuestion();
		}
		else if(sessionStorage.getItem('domainChoice') =="JavaScript"){
			this.getJSQuestion();
		}
	}
	getHTMLQuestion(){
		var rep = document.getElementById("reponse");
        rep.style.border = "5px solid black";
		this.counter = parseInt(sessionStorage.getItem('counter') || 1);
		this.counter = parseInt(sessionStorage.getItem('counter')) + 1;
        sessionStorage.setItem('counter', this.counter);
        this.draggable=true;
	 	this._questionService.getHTMLQuestion()
	 		.subscribe(responseRandomQuestion =>this.question = responseRandomQuestion)

	 }
	 getCSSQuestion(){
	 	var rep = document.getElementById("reponse");
        rep.style.border = "5px solid black";
		this.counter = parseInt(sessionStorage.getItem('counter') || 1);
		this.counter = parseInt(sessionStorage.getItem('counter')) + 1;
        sessionStorage.setItem('counter', this.counter);
        this.draggable=true;
	 	this._questionService.getCSSQuestion()
	 		.subscribe(responseRandomQuestion =>this.question = responseRandomQuestion)

	 }

	 getJSQuestion(){
	 	var rep = document.getElementById("reponse");
        rep.style.border = "5px solid black";
		this.counter = parseInt(sessionStorage.getItem('counter') || 1);
		this.counter = parseInt(sessionStorage.getItem('counter')) + 1;
        sessionStorage.setItem('counter', this.counter);
        this.draggable=true;
	 	this._questionService.getJSQuestion()
	 		.subscribe(responseRandomQuestion =>this.question = responseRandomQuestion)

	 }
	 retourExamen(){

	 }
	 abandonner(){

	 }
	 saveExam(){
	 	
	 }
	 onDragStart(event,$i){
		event.dataTransfer.setData('text/plain',null)
        if (this.draggable){
            this.dragStarted = event.target;
            this.selectedAnswer=$i;
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
                console.log(parseInt(this.question.Correctanswer));
                console.log(this.selectedAnswer);
                if(this.selectedAnswer==this.question.Correctanswer){
                    var rep = document.getElementById("reponse");
                    rep.style.border = "5px solid green";
                    this.nbCorrectAnswers = parseInt(sessionStorage.getItem('nbCorrectAnswers') || 0) + 1;
            		sessionStorage.setItem('nbCorrectAnswers', this.nbCorrectAnswers);
                }
                else{
                    var rep = document.getElementById("reponse");
                    rep.style.border = "5px solid red";
                }
            }
        }
    }

}

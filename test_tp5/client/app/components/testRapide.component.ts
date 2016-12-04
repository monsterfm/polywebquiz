
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
	rep={};//valid for not usable response observer
	private draggable = true;
	private dragStarted;
    private selectedAnswer;
    private counter;
    private nbCorrectAnswers;
	
	constructor(private _questionService: QuestionService){

	}
	ngOnInit(){
		this.getTestQuestion()
		
	}
	getTestQuestion(){
		var rep = document.getElementById("reponse");
        rep.style.border = "5px solid black";
		this.counter = parseInt(sessionStorage.getItem('counter')) || 1;
		this.counter = parseInt(sessionStorage.getItem('counter')) + 1;
        sessionStorage.setItem('counter', this.counter);
        //updateCurrentScoreTag();
		this.draggable=true; //shoud be draggable for next question
		this._questionService.getQuestion()
			.subscribe(responseRandomQuestion =>this.question = responseRandomQuestion)


	}
	retourTestRapide(){
		this.nbCorrectAnswers = parseInt(sessionStorage.getItem("nbCorrectAnswers"));
        this.counter = parseInt(sessionStorage.getItem("counter"));
            var counters = {
                countCorrectAnswer: this.nbCorrectAnswers,
                countTotal: this.counter
            }
        this._questionService.saveInDb(counters)
            .subscribe(responseRandomQuestion =>this.question = responseRandomQuestion)
	}

	onDragStart(event, $i){
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
                    this.nbCorrectAnswers = (parseInt(sessionStorage.getItem('nbCorrectAnswers')) || 0) + 1;
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

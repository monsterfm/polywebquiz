import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../services/Question.service'

@Component({
    selector: 'stats',
    templateUrl: '../templates/stats',
    providers:[QuestionService]
})

export class StatsComponent implements OnInit{

	reponse:any ;
	private resultTest="";
	private nbrQuestionRapide;
	private nbrQuestionTotal;
	private i;
	constructor(private _questionService: QuestionService){

	}
	ngOnInit(){
		this._questionService.getResultsTest()
			.subscribe(responseRandomQuestion =>this.reponse = responseRandomQuestion);
		console.log(this.reponse);
		if(this.reponse == null || this.reponse.length == 0) 
                        this.resultTest= "Statistiques test rapide : 0 / 0";
        else{
            for(this.i in this.reponse){
                this.nbrQuestionRapide=this.nbrQuestionRapide+(parseInt(this.reponse[this.i].nbCorrectAnswers));
                this.nbrQuestionTotal=this.nbrQuestionTotal+(parseInt(this.reponse[this.i].totalCounter));
                }
                this.resultTest="Statistiques test rapide : "+ this.nbrQuestionRapide +"/ " + this.nbrQuestionTotal;
            }
        console.log(this.resultTest);
		
	}
	



	reset(){
		localStorage.clear();
		//moyenneExamens(); //du tp4 (changera le message du reset )
		let stats = document.getElementById('stats');
		console.log(stats) //prints your element
		stats.innerHTML="Aucun examen n'a encore ete fait!"
		//CRER VARIABLE PRIVATE statstest et stats comme dans 
		//FAIRE une variable examen qui comporte les donnes de la bd

	}

}
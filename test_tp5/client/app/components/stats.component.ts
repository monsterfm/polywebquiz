import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../services/Question.service'
import{ResultatsTest} from '../services/ResultatsTest'

@Component({
    selector: 'stats',
    templateUrl: '../templates/stats',
    providers:[QuestionService]
})

export class StatsComponent implements OnInit{

	reponseTest= new ResultatsTest('nbCorrectAnswers','totalCounter');
	reponseExam={};
	private resultTest="";
	private nbrQuestionRapide=0;
	private nbrQuestionTotal=0;
	private i;
	constructor(private _questionService: QuestionService){

	}
	ngOnInit(){
		this.getResultatTest();
		this.getResultatExam();
		
		
	}
	
	getResultatTest(){
		 this._questionService.getResultsTest()
				.subscribe(responseRandomQuestion =>{this.reponseTest = responseRandomQuestion;
				this.afficherResultats()});
	}

	getResultatExam(){
		this._questionService.getResultsExams()
				.subscribe(responseRandomQuestion =>{this.reponseExam = responseRandomQuestion;
				this.afficherResultatsExam()});
	}

	afficherResultats(){
		if(this.reponseTest.nbCorrectAnswers == "nbCorrectAnswers" ) {
			
			this.resultTest= "Statistiques test rapide : 0 / 0";
			let statstest = document.getElementById('statstest');
			console.log(statstest); //prints your element
			statstest.innerHTML="Statistiques test rapide : 0 / 0";

		}
                        
        else{
            for(this.i in this.reponseTest){
                this.nbrQuestionRapide=this.nbrQuestionRapide+(parseInt(this.reponseTest[this.i].nbCorrectAnswers));
                this.nbrQuestionTotal=this.nbrQuestionTotal+(parseInt(this.reponseTest[this.i].totalCounter));
                }
                this.resultTest="Statistiques test rapide : "+ this.nbrQuestionRapide +"/ " + this.nbrQuestionTotal;
                let statstest = document.getElementById('statstest');
				console.log(statstest); //prints your element
				statstest.innerHTML=this.resultTest;
            }
	}

	afficherResultatsExam(){
		//Todo:Afficher les resultats des examens
		console.log(this.reponseExam);
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
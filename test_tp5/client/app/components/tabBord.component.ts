import { Component  } from '@angular/core';
//import {QuestionService} from '../services/Question.service'

@Component({
    selector: 'tabBord',
    templateUrl: '../templates/tabBord',
   
})

export class TabBordComponent {
	private examData = {"domainChoice":'domaine',"examNumber":"nombre","nbCorrectAnswers":0}
	private testData = {"nbCorrectAnswers":0,"counter":0}
	private domaines=["HTML","CSS","JavaScript","Continuer"];
	private examNumbers = ["1","2","3","4","5","6","7","8"];
	private resetMsg='';
	saveExamData(value){
		console.log(value);
		sessionStorage.clear();

        sessionStorage.setItem('domainChoice', value.domaine);
        sessionStorage.setItem('examNumber', value.nombre);
        sessionStorage.setItem('nbCorrectAnswers', "0");

        //this.moyenneExamens();
	}

	startTestRapide(){
		console.log("value");
		sessionStorage.clear();

        sessionStorage.setItem('nbCorrectAnswers', this.testData.nbCorrectAnswers.toString());
        sessionStorage.setItem('counter', this.testData.counter.toString());
        //this.moyenneExamens();

	}
	// reset(){

	// 	localStorage.clear();
 //        //this.moyenneExamens();
 //        this.resetMsg = "Aucun examens n'a encore ete fait!"

	// }
	



}

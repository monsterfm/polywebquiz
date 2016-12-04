import {Injectable} from '@angular/core';
import{Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import{Question} from './Question'
@Injectable()
export class QuestionService{
	
	private basicUrl = '/ajax';
	private draggable = true;
	private dragged;
	constructor(private _http : Http){}
	//test questions
	getQuestion(){

		return this._http.get(this.basicUrl +'/question')
				.map((response:Response)=>response.json());
	}
	//html questions
	getHTMLQuestion(){

		return this._http.get(this.basicUrl+'/questionHTML')
				.map((response:Response)=>response.json());
	}
		//CSS questions
	getCSSQuestion(){

		return this._http.get(this.basicUrl+'/questionCSS')
				.map((response:Response)=>response.json());
	}
		//JS questions
	getJSQuestion(){

		return this._http.get(this.basicUrl+'/questionJavaScript')
				.map((response:Response)=>response.json());
	}
	//add question
	ajouterQuestion(body:Question){
		return this._http.post(this.basicUrl+'/ajouterQuestion',body)
				.map((response:Response)=>response)
	}
	getNbHTMLQuestions(){
		return this._http.get(this.basicUrl +'/nbreQuestionsHTML')
				.map((response:Response)=>response.json());

	}
	getNbCSSQuestions(){
		return this._http.get(this.basicUrl +'/nbreQuestionsCSS')
				.map((response:Response)=>response.json());


	}
	getNbJSQuestions(){
		return this._http.get(this.basicUrl +'/nbreQuestionsJS')
				.map((response:Response)=>response.json());

	}
	viderDB(){
		return this._http.delete(this.basicUrl+'/delete')
				.map((response:Response)=>response.json());
	}
	saveInDb(body){
		return this._http.post(this.basicUrl+'/saveInDb', body)
				.map((response:Response)=>response.json());
	}

	getResultsTest(){
		return this._http.get(this.basicUrl +'/resultsTest')
				.map((response:Response)=>response.json());

	}

	getResultsExams(){
		return this._http.get(this.basicUrl +'/resultsExams')
				.map((response:Response)=>response.json());
	}

}

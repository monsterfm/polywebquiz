import {Injectable} from '@angular/core';
import{Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import{Question} from './Question'
@Injectable()
export class ExamenService{
	
	private basicUrl = '/ajax';
	constructor(private _http : Http){}
	// sauvegarderExamen(body){
	// 	return this._http.post(this.basicUrl+'/sauvegarderExamen',body)
	// 		.map((response:Response)=>response)

	// }
}
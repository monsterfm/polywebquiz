import { Component  } from '@angular/core';

@Component({
    selector: 'stats',
    templateUrl: '../templates/stats'
})

export class StatsComponent {
	reset(){
		localStorage.clear();
		//moyenneExamens(); //du tp4 (changera le message du reset )
		let stats = document.getElementById('stats');
		console.log(stats) //prints your element
		stats.innerHTML="Aucun examen n'a encore ete fait!"
		

	}

}
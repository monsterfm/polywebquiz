import { Component  } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: '../templates/header'
})

export class HeaderComponent {
    menu = [
        {path: '/accueil', name : 'Accueil'},
        {path: '/tabBord', name : 'Tableau de bord'},
        {path: '/instructions', name : 'Instructions'},
        {path: '/ajouterQuestion', name : 'Ajouter question'}
    ];
}

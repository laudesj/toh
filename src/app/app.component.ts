// 3 éléments pour décrire un composant :
// les imports
// le decorator Component
// la classe

import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // le tag <app-root></app-root>
  templateUrl: './app.component.html', // la "vue" du composant
  styleUrls: ['./app.component.css'] // le style CSS associé
})
export class AppComponent { // la classe contient la partie "logique" du composant
  title = 'Tour of Heroes'; // une propriété title ; pourra être affichée dans le template
}

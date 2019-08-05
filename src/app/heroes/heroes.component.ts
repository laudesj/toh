import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[]; // tableau d'objets de type Hero

  constructor(private heroService: HeroService) { } // injection de dépendance : le service HeroService est "injecté" via le constructeur ; le service est désormais accessible dans la classe

  ngOnInit() { // méthode de cycle : à l'initialisation du composant, on appelle la méthode getHeroes()
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes); // le service est invoqué de manière asynchrone
  }

  add(name: string): void { // ajout d'un héros via le service
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void { // suppression d'un héros via le service
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}

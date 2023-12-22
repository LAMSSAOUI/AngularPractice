import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nouvelle-tache',
  templateUrl: './nouvelle-tache.component.html',
  styleUrls: ['./nouvelle-tache.component.css']
})
export class NouvelleTacheComponent {
  nom : string = '';
  categorie : string = '';
  complete : boolean = false;
  emailResponsable : string = '';
  soumettreFormulaire () {
    console.log('Formulaire soumis:', this.nom, this.categorie , this.complete , this.emailResponsable); 
  }
}

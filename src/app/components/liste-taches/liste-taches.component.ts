import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-taches',
  templateUrl: './liste-taches.component.html',
  styleUrls: ['./liste-taches.component.css']
})
export class ListeTachesComponent {
  taches =  [
    {nom : 'Tache 1 ' , categories : 'Normal' , complete : false},
    {nom : 'Tache 2 ' , categories : 'Urgent' , complete : true},
    {nom : 'Tache 3 ' , categories : 'Tres urgent' , complete : false},
    {nom : 'Tache 4 ' , categories : 'Normal' , complete : false},
    {nom : 'Tache 5 ' , categories : 'Tres urgent' , complete : false},
    {nom : 'Tache 6 ' , categories : 'Urgent' , complete : true},


  ];

  categories = ['Normal', 'Urgent', 'Tres urgent'];
  categorieFiltre : string = 'Toutes'; 

}

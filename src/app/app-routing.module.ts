import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeTachesComponent } from './components/liste-taches/liste-taches.component';
import { NouvelleTacheComponent } from './components/nouvelle-tache/nouvelle-tache.component';

const routes: Routes = [
  { path : 'list-taches',component:ListeTachesComponent },
  { path : 'nouvelle-tache',component:NouvelleTacheComponent },
  { path : '' , redirectTo : '/nouvelle-tache' , pathMatch :'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

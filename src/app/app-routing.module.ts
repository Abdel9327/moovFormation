import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FormationComponent } from './formation/formation.component';
import { HomeComponent } from './home/home.component';
import { NousComponent } from './nous/nous.component';

const routes: Routes = [
  { path: '',   redirectTo: 'accueil', pathMatch: 'full' },
  {path:'accueil',component:HomeComponent},
  {path:'formation',component:FormationComponent},
  {path:'mouvFormation',component:NousComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

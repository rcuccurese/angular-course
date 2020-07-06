import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvventuraPageComponent, AzionePageComponent, CommediaPageComponent, ContattiPageComponent, PopolariPageComponent } from './pages/';


const routes: Routes = [
  {path:'', redirectTo:'popolari', pathMatch:'full'},
  {path:'popolari', component: PopolariPageComponent, children: [ 
    {path: 'azione', component: AzionePageComponent},
    {path: 'avventura', component: AvventuraPageComponent}, 
    {path: 'commedia', component: CommediaPageComponent }] },
  {path:'contatti', component: ContattiPageComponent },
  {path:'**', redirectTo:'popolari' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
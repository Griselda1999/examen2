import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantallaunoComponent } from './pantallauno/pantallauno.component';
import { PantalladosComponent } from './pantallados/pantallados.component';
import { PantallatresComponent } from './pantallatres/pantallatres.component';


const routes: Routes = [

  { path: 'pantallauno', component: PantallaunoComponent },
  { path: 'pantallados', component: PantalladosComponent },
  { path: 'pantallatres', component: PantallatresComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

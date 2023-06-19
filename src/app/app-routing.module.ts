import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetosComponent } from './projetos/projetos.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'projetos', component:ProjetosComponent},
  {path:'quem-somos', component:QuemSomosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

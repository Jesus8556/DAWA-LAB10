import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { FormularioComponent } from './formulario/formulario.component';
const routes: Routes = [

  {path: 'formulario', component: FormularioComponent },
  {path: 'lista', component: ListaComponent },
  {path:'', redirectTo:'/lista',pathMatch:'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

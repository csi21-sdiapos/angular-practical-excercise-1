import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { PanelComponent } from './panel/panel.component';

const routes: Routes = [
  {
    path: 'panel',
    component: PanelComponent
  },
  {
    path: 'listado/:grupo',
    component: ListadoComponent
  },
  {
    path: '',
    redirectTo: '/panel',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

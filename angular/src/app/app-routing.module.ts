import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LampadineComponent } from './lampadine/lampadine.component';

const routes: Routes = [
  {path:"lampadine", component: LampadineComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

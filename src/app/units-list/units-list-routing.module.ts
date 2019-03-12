import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListContainer } from './list/list.container';

const routes: Routes = [
  { path: '', component: ListContainer },
  { path: ':city', component: ListContainer },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitsListRoutingModule { }

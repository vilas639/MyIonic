import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddoffersPage } from './addoffers.page';

const routes: Routes = [
  {
    path: '',
    component: AddoffersPage
  },
  {
    path: 'newoffers',
    loadChildren: () => import('./newoffers/newoffers.module').then( m => m.NewoffersPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddoffersPageRoutingModule {}

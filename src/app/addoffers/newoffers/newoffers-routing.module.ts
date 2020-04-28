import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewoffersPage } from './newoffers.page';

const routes: Routes = [
  {
    path: '',
    component: NewoffersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewoffersPageRoutingModule {}

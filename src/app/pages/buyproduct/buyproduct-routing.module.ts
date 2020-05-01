import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyproductPage } from './buyproduct.page';

const routes: Routes = [
  {
    path: '',
    component: BuyproductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyproductPageRoutingModule {}

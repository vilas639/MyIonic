import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyproductPageRoutingModule } from './buyproduct-routing.module';

import { BuyproductPage } from './buyproduct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyproductPageRoutingModule
  ],
  declarations: [BuyproductPage]
})
export class BuyproductPageModule {}

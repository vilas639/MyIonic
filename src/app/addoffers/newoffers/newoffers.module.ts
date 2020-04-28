import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewoffersPageRoutingModule } from './newoffers-routing.module';

import { NewoffersPage } from './newoffers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewoffersPageRoutingModule
  ],
  declarations: [NewoffersPage]
})
export class NewoffersPageModule {}

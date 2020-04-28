import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddoffersPageRoutingModule } from './addoffers-routing.module';

import { AddoffersPage } from './addoffers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddoffersPageRoutingModule
  ],
  declarations: [AddoffersPage]
})
export class AddoffersPageModule {}

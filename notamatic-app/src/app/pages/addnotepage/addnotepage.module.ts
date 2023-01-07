import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddnotepagePageRoutingModule } from './addnotepage-routing.module';

import { AddnotepagePage } from './addnotepage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddnotepagePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [AddnotepagePage],
})
export class AddnotepagePageModule {}

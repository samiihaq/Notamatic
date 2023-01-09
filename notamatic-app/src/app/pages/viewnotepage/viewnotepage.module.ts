import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewnotepagePageRoutingModule } from './viewnotepage-routing.module';

import { ViewnotepagePage } from './viewnotepage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewnotepagePageRoutingModule
  ],
  declarations: [ViewnotepagePage]
})
export class ViewnotepagePageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddnotepagePage } from './addnotepage.page';

const routes: Routes = [
  {
    path: '',
    component: AddnotepagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddnotepagePageRoutingModule {}

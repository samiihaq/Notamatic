import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewnotepagePage } from './viewnotepage.page';

const routes: Routes = [
  {
    path: '',
    component: ViewnotepagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewnotepagePageRoutingModule {}

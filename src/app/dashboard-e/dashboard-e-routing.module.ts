import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardEPage } from './dashboard-e.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardEPageRoutingModule {}

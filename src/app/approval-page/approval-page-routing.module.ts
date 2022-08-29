import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApprovalPagePage } from './approval-page.page';

const routes: Routes = [
  {
    path: '',
    component: ApprovalPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApprovalPagePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindJobsPage } from './find-jobs.page';

const routes: Routes = [
  {
    path: '',
    component: FindJobsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindJobsPageRoutingModule {}

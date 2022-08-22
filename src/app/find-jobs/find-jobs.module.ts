import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindJobsPageRoutingModule } from './find-jobs-routing.module';

import { FindJobsPage } from './find-jobs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindJobsPageRoutingModule
  ],
  declarations: [FindJobsPage]
})
export class FindJobsPageModule {}

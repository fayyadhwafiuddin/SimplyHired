import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindJobsPageRoutingModule } from './find-jobs-routing.module';

import { FindJobsPage } from './find-jobs.page';
import { SelectfilterPipe } from './selectfilter.pipe';
import { FilterqualiPipe } from './filterquali.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindJobsPageRoutingModule
  ],
  declarations: [FindJobsPage, SelectfilterPipe, FilterqualiPipe]
})
export class FindJobsPageModule {}

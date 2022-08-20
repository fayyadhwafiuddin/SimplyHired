import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostJobsPageRoutingModule } from './post-jobs-routing.module';

import { PostJobsPage } from './post-jobs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostJobsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PostJobsPage]
})
export class PostJobsPageModule {}

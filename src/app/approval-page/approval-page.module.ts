import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApprovalPagePageRoutingModule } from './approval-page-routing.module';

import { ApprovalPagePage } from './approval-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApprovalPagePageRoutingModule
  ],
  declarations: [ApprovalPagePage]
})
export class ApprovalPagePageModule {}

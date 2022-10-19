import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardEPageRoutingModule } from './dashboard-e-routing.module';

import { DashboardEPage } from './dashboard-e.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardEPageRoutingModule
  ],
  declarations: [DashboardEPage]
})
export class DashboardEPageModule {}

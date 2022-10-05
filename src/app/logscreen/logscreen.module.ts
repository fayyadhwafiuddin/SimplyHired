import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogscreenPageRoutingModule } from './logscreen-routing.module';

import { LogscreenPage } from './logscreen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogscreenPageRoutingModule
  ],
  declarations: [LogscreenPage]
})
export class LogscreenPageModule {}

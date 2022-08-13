import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HourRoutingModule } from './time.routing-module';

import { HourComponent } from './time/hour.component';

@NgModule({
  declarations: [
    HourComponent
  ],
  imports: [
    CommonModule,
    HourRoutingModule
  ],
  providers: [],
})
export class HourModule { }

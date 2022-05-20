import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HoraRoutingModule } from './time.routing-module';

import { HoraComponent } from './time/hora.component';

@NgModule({
  declarations: [
    HoraComponent
  ],
  imports: [
    CommonModule,
    HoraRoutingModule
  ],
  providers: [],
})
export class HoraModule { }

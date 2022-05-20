import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { REST_SERVICES } from './constants/rest_services';
import { HoraModule } from './modules/time/time.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HoraModule,
    HttpClientModule
  ],
  providers: [...REST_SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule { }

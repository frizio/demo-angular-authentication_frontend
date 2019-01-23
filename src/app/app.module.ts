import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AuthenticationService } from './services/authentication.service';
import { EventService } from './services/event.service';
import { AuthenticationGuard } from './utils/authentication.guard';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthenticationService, 
    EventService,
    AuthenticationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

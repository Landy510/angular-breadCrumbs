import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadCrumbModule } from '@shared/components/breadcrumb/breadcrumb.component';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BreadCrumbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

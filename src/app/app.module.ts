import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgOninitComponent } from './ng-oninit/ng-oninit.component';
import { NgOnchangesComponent } from './ng-onchanges/ng-onchanges.component';
import { ChildNgonchangesComponent } from './ng-onchanges/child-ngonchanges/child-ngonchanges.component';
import { FormsModule } from '@angular/forms';
import { NgAfterhookComponent } from './ng-afterhook/ng-afterhook.component';
import { ChildAfterComponent } from './ng-afterhook/child-after/child-after.component';

@NgModule({
  declarations: [
    AppComponent,
    NgOninitComponent,
    NgOnchangesComponent,
    ChildNgonchangesComponent,
    NgAfterhookComponent,
    ChildAfterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

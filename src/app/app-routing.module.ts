import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgOninitComponent } from './ng-oninit/ng-oninit.component';
import { NgOnchangesComponent } from './ng-onchanges/ng-onchanges.component';
import { NgAfterhookComponent } from './ng-afterhook/ng-afterhook.component';

const routes: Routes = [
  {path:'oninit', component:NgOninitComponent},
  {path:'onchanges', component:NgOnchangesComponent},
  {path:'onafter', component:NgAfterhookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildParentRoutingModule } from './child-parent-routing.module';
import { DemoIdComponent } from './pages/demo-id/demo-id.component';


@NgModule({
  declarations: [
    DemoIdComponent
  ],
  imports: [
    CommonModule,
    ChildParentRoutingModule
  ]
})
export class ChildParentModule { }

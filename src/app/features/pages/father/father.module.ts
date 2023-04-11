import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FatherRoutingModule } from './father-routing.module';
import { FatherComponent } from './father.component';


@NgModule({
  declarations: [
    FatherComponent
  ],
  imports: [
    CommonModule,
    FatherRoutingModule
  ]
})
export class FatherModule { }

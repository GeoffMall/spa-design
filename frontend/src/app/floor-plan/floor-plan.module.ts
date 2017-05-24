import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloorPlanComponent } from './floor-plan.component';
import {FloorPlanRoutingModule} from './floor-plan-routing.module';
import {SharedModule} from '../shared/shared.module';
import {MaterialModule} from '../shared/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    FloorPlanRoutingModule,
  ],
  declarations: [FloorPlanComponent]
})
export class FloorPlanModule { }

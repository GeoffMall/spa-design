import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloorPlanComponent } from './floor-plan.component';
import {FloorPlanRoutingModule} from './floor-plan-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FloorPlanRoutingModule,
  ],
  declarations: [FloorPlanComponent]
})
export class FloorPlanModule { }

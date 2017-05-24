import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FloorPlanComponent} from './floor-plan.component';

const routes: Routes = [
  { path: '', component: FloorPlanComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FloorPlanRoutingModule { }

import { Component, OnInit } from '@angular/core';
import {FloorPlan} from '../models/floor-plan';
import {FLOORPLANS} from '../models/floor-plan-mock';

@Component({
  selector: 'app-floor-plan',
  templateUrl: './floor-plan.component.html',
  styles: []
})
export class FloorPlanComponent implements OnInit {
  public floorPlans: FloorPlan[];
  public viewSingle = false;
  public currentFloorPlan: FloorPlan;

  constructor() {}

  ngOnInit() {
    this.floorPlans = FLOORPLANS;
  }

  viewToList(): void {
    this.viewSingle = false;
  }

  viewToSingle(floorPlan: FloorPlan): void {
    this.currentFloorPlan = floorPlan;
    this.viewSingle = true;
  }

}


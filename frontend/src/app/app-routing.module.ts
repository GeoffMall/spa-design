import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './shared/about/about.component';
import {AppointmentsComponent} from './shared/appointments/appointments.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'appointments', component: AppointmentsComponent} ,
  {
    path: 'product',
    loadChildren: 'app/product/product.module#ProductModule'

  },
  {
    path: 'procedure',
    loadChildren: 'app/procedure/procedure.module#ProcedureModule'

  },
  {
    path: 'floor-plan',
    loadChildren: 'app/floor-plan/floor-plan.module#FloorPlanModule'

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

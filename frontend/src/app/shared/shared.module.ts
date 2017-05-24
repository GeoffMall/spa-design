import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from './material.module';
import {AboutComponent} from './about/about.component';
import {AppointmentsComponent} from './appointments/appointments.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    AboutComponent,
    AppointmentsComponent,

  ],
  exports: [
    AboutComponent,
    AppointmentsComponent,

    MaterialModule
  ]
})
export class SharedModule { }

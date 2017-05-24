import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from './material.module';
import {AboutComponent} from './about/about.component';
import {AppointmentsComponent} from './appointments/appointments.component';
import {CapitalizePipe} from './capitalize.pipe';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    AboutComponent,
    AppointmentsComponent,

    CapitalizePipe,

  ],
  exports: [
    AboutComponent,
    AppointmentsComponent,

    CapitalizePipe,

    MaterialModule
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcedureComponent } from './procedure.component';
import {ProcedureRoutingModule} from './procedure-routing.module';
import {MaterialModule} from '../shared/material.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ProcedureRoutingModule
  ],
  declarations: [ProcedureComponent]
})
export class ProcedureModule { }

import { Component, OnInit } from '@angular/core';
import {PROCEDURES} from '../models/procedure-mock';
import {Procedure} from '../models/procedure';
import {ProcedureService} from '../core/procedure.service';

@Component({
  selector: 'app-procedure',
  templateUrl: './procedure.component.html',
  styles: []
})
export class ProcedureComponent implements OnInit {
  public procedures: Procedure[];
  public viewSingle = false;
  public currentProcedure: Procedure;

  constructor(public procedureService: ProcedureService) { }

  ngOnInit() {
    this.procedures = PROCEDURES;
    // console.log('Using mock procedures');

    /* TODO add this when back end is added
    this.procedureService.getProcedures().subscribe(
      (procedures) => {
        this.procedures = procedures;
      }, () => {
        console.warn('Could not retrieve real data, using mock procedures');
        this.procedures = PROCEDURES;
      });
      */
  }

  viewToList(): void {
    this.viewSingle = false;
  }

  viewToSingle(procedure: Procedure): void {
    this.currentProcedure = procedure;
    this.viewSingle = true;
  }

}

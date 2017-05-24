import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AuthenticationService} from './authentication.service';

@Injectable()
export class ProcedureService {

  constructor(private auth: AuthenticationService) { }

  public getProcedures(): Observable<any> {
    return this.auth.get('/procedures').map(
      (response) => {
        return response.json();
      }, (error) => {
        console.error('Something went wrong with GET /procedures');
        return error.json();
      });
  }
}

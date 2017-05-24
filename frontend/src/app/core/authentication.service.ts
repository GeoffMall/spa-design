import { Injectable } from '@angular/core';
import {Http, RequestOptionsArgs} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {
  public host: string;

  constructor(private http: Http) {
    this.host = 'http://localhost:8080/';
  }

  public get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    url = this.host + url;
    return this.http.get(url, options).map(
      (response) => {
        return response.json();
      }).catch((error) => {
        return error.json();
      });
  }

}

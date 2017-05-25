import { Injectable } from '@angular/core';
import {Http, RequestOptionsArgs} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {
  public host: string;

  constructor(private http: Http) {
    const url: Array<string> = window.location.href.split('/');
    this.host = url[0] + '//' + url[2];
    if (this.host.indexOf('http://localhost') !== -1) {
      this.host = 'http://localhost:8080/';
      console.log('Found localhost as host, using cross origin requests');
    } else {
      this.host = '';
    }
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

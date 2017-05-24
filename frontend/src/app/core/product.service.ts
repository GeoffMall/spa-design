import { Injectable } from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProductService {

  constructor(private auth: AuthenticationService) { }

  public getProducts(): Observable<any> {
    return this.auth.get('/products').map(
      (response) => {
        return response.json();
      }, (error) => {
        console.error('Something went wrong with GET /products');
        return error.json();
      });
  }

}

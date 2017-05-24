import { Component, OnInit } from '@angular/core';
import {ProductService} from '../core/product.service';
import {Product} from '../models/product';
import {PRODUCTS} from '../models/product-mock';

@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {
  public products: Product[];
  public viewSingle = false;
  public currentProduct: Product;

  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.products = PRODUCTS;
    // console.log('Using mock products');

    /* TODO add this when back end is added
     this.productservice.getProducts().subscribe(
     (products) => {
     this.products = products;
     }, () => {
     console.warn('Could not retrieve real data, using mock products');
     this.products = PRODUCTS;
     });
     */
  }

  viewToList(): void {
    this.viewSingle = false;
  }

  viewToSingle(product: Product): void {
    this.currentProduct = product;
    this.viewSingle = true;
  }

}

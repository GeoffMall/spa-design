import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import {ProductComponent} from './product.component';
import {MaterialModule} from '../shared/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ProductRoutingModule
  ],
  declarations: [ProductComponent]
})
export class ProductModule { }

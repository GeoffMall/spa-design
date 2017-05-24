import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductService} from "./product.service";
import {AuthenticationService} from "./authentication.service";
import {ProcedureService} from "./procedure.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthenticationService,
    ProcedureService,
    ProductService,
  ]
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {

    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}

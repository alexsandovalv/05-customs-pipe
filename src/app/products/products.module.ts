import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanFlyPipe } from "./pipes/can-fly.pipe";
import { ToggleCasePipe } from "./pipes/toggle-case.pipe";

import { ProductsRoutingModule } from './products-routing.module';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import {PrimeNGModule} from "../prime-ng/prime-ng.module";
import { OrderComponent } from './pages/order/order.component';
import { SortByPipe } from './pipes/sort-by.pipe';


@NgModule({
  declarations: [
    BasicPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    OrderComponent,

    //Pipes
    ToggleCasePipe,
    CanFlyPipe,
    SortByPipe
  ],
  imports: [
    CommonModule,
    PrimeNGModule,
    ProductsRoutingModule,
  ]
})
export class ProductsModule { }

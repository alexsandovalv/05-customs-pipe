import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ButtonModule} from 'primeng/button';
import {RippleModule} from "primeng/ripple";
import {MenuModule} from "primeng/menu";
import {MenubarModule} from 'primeng/menubar';
import {CardModule} from "primeng/card";
import {FieldsetModule} from "primeng/fieldset";
import {PanelModule} from "primeng/panel";
import { TableModule } from "primeng/table";
import { ToolbarModule } from "primeng/toolbar";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    //MenuModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    PanelModule,
    RippleModule,
    ToolbarModule,
    TableModule
  ]
})
export class PrimeNGModule {
}

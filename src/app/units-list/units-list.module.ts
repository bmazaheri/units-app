import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitsListRoutingModule } from './units-list-routing.module';
import { ListComponent } from './list/list.component';
import { UnitComponent } from './unit/unit.component';

@NgModule({
  declarations: [ListComponent, UnitComponent],
  imports: [
    CommonModule,
    UnitsListRoutingModule
  ]
})
export class UnitsListModule { }

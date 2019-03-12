import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitsListRoutingModule } from './units-list-routing.module';
import { ListComponent } from './list/list.component';
import { UnitComponent } from './unit/unit.component';
import { ListContainer } from './list/list.container';
import { FiltersComponent } from './list/filters/filters.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ListComponent,
    ListContainer,
    UnitComponent,
    FiltersComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UnitsListRoutingModule
  ]
})
export class UnitsListModule { }

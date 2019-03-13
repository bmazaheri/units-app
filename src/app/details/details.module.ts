import { NgModule } from '@angular/core';
import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, DetailsRoutingModule],
  declarations: [DetailsComponent]
})
export class DetailsModule {}

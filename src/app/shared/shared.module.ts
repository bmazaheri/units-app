import { NgModule } from '@angular/core';
import { AddressSerializerPipe } from './address-serializer.pipe';

@NgModule({
  declarations: [
    AddressSerializerPipe,
  ],
  exports: [
    AddressSerializerPipe,
  ]
})
export class SharedModule { }

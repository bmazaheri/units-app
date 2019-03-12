import { PipeTransform, Pipe } from '@angular/core';
import { Address } from '../store/units';

@Pipe({ name: 'addressSerializer' })
export class AddressSerializerPipe implements PipeTransform {
  transform(value: Address): string {
    return `${value.streetName} ${value.houseNumber} ${value.postalCode} 
      ${value.city}${value.neighborhood ? value.neighborhood : ''}`;
  }
}
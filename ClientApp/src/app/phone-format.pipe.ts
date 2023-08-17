import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {
  transform(value: string): string {
    if (value) {
      const countryCode = value.slice(0, 4);
      const firstPart = value.slice(4, 8);
      const secondPart = value.slice(8, 11);
      return countryCode + ' ' + firstPart + ' ' + secondPart;
    }
    return value;
  }
}

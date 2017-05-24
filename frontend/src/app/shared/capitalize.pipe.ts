import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(str: string, all: boolean) {
    // Capitalize all the words
    if (all) {
      return str.split(' ').map((str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }).join(' ');
    }
    // Capitalize the first word only
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

}

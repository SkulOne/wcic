import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeTags'
})
export class RemoveTagsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value.toString().replace(/<\/?[a-zA-Z]+>/gi, '');
  }

}

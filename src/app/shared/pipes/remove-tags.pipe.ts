import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeTags'
})
export class RemoveTagsPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.replace(/<\/?[a-zA-Z]+>/gi, '');
  }

}

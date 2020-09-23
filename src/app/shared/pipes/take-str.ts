import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'takeStr'
})
export class TakeStr implements PipeTransform {

  transform(value: string, size: number): unknown {
    return value.substring(0, size - 1);
  }

}

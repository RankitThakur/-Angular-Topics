import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custemPipe'
})
export class CustemPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

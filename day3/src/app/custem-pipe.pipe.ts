import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custemPipe'
})
export class CustemPipePipe implements PipeTransform {

  transform(value: string, Gender: string): string {
    if(Gender == "Male"){
      return "MR."+value;
    }
    else{
    return "MISS." + value
  }
  }
}

import { SelectorMatcher } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false      

})
export class FillterPipe implements PipeTransform {

  transform(value: any, searchBox:any): any {
    return value.filter(function(search:any){
      return search.Name.indexOf(searchBox) > -1
    })

  }

}

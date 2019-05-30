import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageFilter'
})
export class AgeFilterPipe implements PipeTransform {

  transform(arrList: any, ageRequired?: any, key?: string): any {

    return ageRequired ? arrList.filter(list => list[key] >= 18 ) : arrList;
  }

}

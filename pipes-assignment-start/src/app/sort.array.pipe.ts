import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'sortArray'
})
export class SortArrayPipe implements PipeTransform {

  transform(value: any, ...args: any[]) {
   return this.sortArray(value);
  }

  private sortArray( arrays: [{name: string}]): any[] {

    return arrays.sort( (a, b) => {
      const x = a.name.toLowerCase();
      const y = b.name.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    });
}

}

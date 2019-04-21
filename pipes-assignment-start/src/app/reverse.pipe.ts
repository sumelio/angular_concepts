import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'reverseString'
})
export class ReverseStringPipe implements PipeTransform {

  transform(value: any, ...args: any[]) {
   return this.reverseString(value);
  }

  private reverseString( str : string): string {
    const splitString = str.split('');
    const reverseArray = splitString.reverse();
    return reverseArray.join('');
}

}

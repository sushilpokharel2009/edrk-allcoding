import { Pipe} from '@angular/core';

@Pipe({name: 'stringtoarray'})
export class StringToArray {
  text: string;
  textArray: any[];
  transform(v: string, args: any) { 
      this.text = v;
      this.textArray = this.text.split(" ")
      return this.textArray; }
}
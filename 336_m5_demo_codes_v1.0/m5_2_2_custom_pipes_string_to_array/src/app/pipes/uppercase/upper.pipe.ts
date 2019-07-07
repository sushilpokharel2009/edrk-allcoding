import { Pipe} from '@angular/core';

@Pipe({name: 'uppercase'})
export class Uppercase {
  transform(v: string, args: any) { return v.toUpperCase(); }
}
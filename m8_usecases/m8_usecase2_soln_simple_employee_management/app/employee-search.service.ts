import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Employee } from './employee';

@Injectable()
export class EmployeeSearchService {
  constructor(private http: Http) { }

  search(term: string): Observable<Employee[]> {  
    return this.http
      .get(`app/employees/?name=${term}`)
      .map((r: Response) => r.json().data as Employee[])
      .catch((error: any) => {
          console.error('An friendly error occurred', error);
          return Observable.throw(error.message || error);
      });
  }
}

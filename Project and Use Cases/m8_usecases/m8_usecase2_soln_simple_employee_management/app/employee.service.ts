import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Employee } from './employee';

@Injectable()
export class EmployeeService {
  private employeesUrl = 'app/employees';  // URL to web api

  constructor(private http: Http) { }

  getEmployees(): Promise<Employee[]> {
    return this.http
      .get(this.employeesUrl)
      .toPromise()
      .then(response => response.json().data as Employee[])
      .catch(this.handleError);
  }

  getEmployee(id: number): Promise<Employee> {
    return this.getEmployees()
      .then(employees => employees.find(employee => employee.id === id));
  }

  save(employee: Employee): Promise<Employee> {
    if (employee.id) {
      return this.put(employee);
    }
    return this.post(employee);
  }

  delete(employee: Employee): Promise<Response> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.employeesUrl}/${employee.id}`;

    return this.http
      .delete(url, { headers: headers })
      .toPromise()
      .catch(this.handleError);
  }

  // Add new employee
  private post(employee: Employee): Promise<Employee> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(this.employeesUrl, JSON.stringify(employee), { headers: headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  // Update existing employee
  private put(employee: Employee): Promise<Employee> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.employeesUrl}/${employee.id}`;

    return this.http
      .put(url, JSON.stringify(employee), { headers: headers })
      .toPromise()
      .then(() => employee)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

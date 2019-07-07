import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  moduleId: module.id,
  selector: 'my-employee-detail',
  templateUrl: 'employee-detail.component.html',
  styleUrls: ['employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  @Input() employee: Employee;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.navigated = true;
        this.employeeService.getEmployee(id)
            .then(employee => this.employee = employee);
      } else {
        this.navigated = false;
        this.employee = new Employee();
      }
    });
  }

  save(): void {
    this.employeeService
        .save(this.employee)
        .then(employee => {
          this.employee = employee; 
          this.goBack(employee);
        })
        .catch(error => this.error = error); // TODO: Display error message
  }

  goBack(savedEmployee: Employee = null): void {
    this.close.emit(savedEmployee);
    if (this.navigated) { window.history.back(); }
  }
}

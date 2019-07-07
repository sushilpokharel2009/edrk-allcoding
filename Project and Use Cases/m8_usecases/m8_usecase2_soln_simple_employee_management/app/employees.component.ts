import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  moduleId: module.id,
  selector: 'my-employees',
  templateUrl: 'employees.component.html',
  styleUrls: ['employees.component.css']
})
export class EmployeesComponent implements OnInit {
  heroes: Employee[];
  selectedEmployee: Employee;
  addingEmployee = false;
  error: any;
  showNgFor = false;

  constructor(
    private router: Router,
    private employeeService: EmployeeService) { }

  getEmployees(): void {
    this.employeeService
      .getEmployees()
      .then(employees => this.employees = employees)
      .catch(error => this.error = error);
  }

  addEmployee(): void {
    this.addingEmployee = true;
    this.selectedEmployee = null;
  }

  close(savedEmployee: Employee): void {
    this.addingEmployee = false;
    if (savedEmployee) { this.getEmployees(); }
  }

  deleteEmployee(employee: Employee, event: any): void {
    event.stopPropagation();
    this.employeeService
      .delete(employee)
      .then(res => {
        this.employees = this.employees.filter(h => h !== employee);
        if (this.selectedEmployee === employee) { this.selectedEmployee = null; }
      })
      .catch(error => this.error = error);
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
    this.addingEmployee = false;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedEmployee.id]);
  }
}

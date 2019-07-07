import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  employees: Employee[] = [];

  constructor(
    private router: Router,
    private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.employeeService.getEmployees()
      .then(employees => this.employees = employees.slice(1, 5));
  }

  gotoDetail(employee: Employee): void {
    let link = ['/detail', employee.id];
    this.router.navigate(link);
  }
}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var employee_service_1 = require("./employee.service");
var EmployeesComponent = (function () {
    function EmployeesComponent(router, employeeService) {
        this.router = router;
        this.employeeService = employeeService;
        this.addingEmployee = false;
        this.showNgFor = false;
    }
    EmployeesComponent.prototype.getEmployees = function () {
        var _this = this;
        this.employeeService
            .getEmployees()
            .then(function (employees) { return _this.employees = employees; })
            .catch(function (error) { return _this.error = error; });
    };
    EmployeesComponent.prototype.addEmployee = function () {
        this.addingEmployee = true;
        this.selectedEmployee = null;
    };
    EmployeesComponent.prototype.close = function (savedEmployee) {
        this.addingEmployee = false;
        if (savedEmployee) {
            this.getEmployees();
        }
    };
    EmployeesComponent.prototype.deleteEmployee = function (employee, event) {
        var _this = this;
        event.stopPropagation();
        this.employeeService
            .delete(employee)
            .then(function (res) {
            _this.employees = _this.employees.filter(function (h) { return h !== employee; });
            if (_this.selectedEmployee === employee) {
                _this.selectedEmployee = null;
            }
        })
            .catch(function (error) { return _this.error = error; });
    };
    EmployeesComponent.prototype.ngOnInit = function () {
        this.getEmployees();
    };
    EmployeesComponent.prototype.onSelect = function (employee) {
        this.selectedEmployee = employee;
        this.addingEmployee = false;
    };
    EmployeesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedEmployee.id]);
    };
    return EmployeesComponent;
}());
EmployeesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-employees',
        templateUrl: 'employees.component.html',
        styleUrls: ['employees.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        employee_service_1.EmployeeService])
], EmployeesComponent);
exports.EmployeesComponent = EmployeesComponent;
//# sourceMappingURL=employees.component.js.map
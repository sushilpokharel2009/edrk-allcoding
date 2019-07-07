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
var employee_1 = require("./employee");
var employee_service_1 = require("./employee.service");
var EmployeeDetailComponent = (function () {
    function EmployeeDetailComponent(employeeService, route) {
        this.employeeService = employeeService;
        this.route = route;
        this.close = new core_1.EventEmitter();
        this.navigated = false; // true if navigated here
    }
    EmployeeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            if (params['id'] !== undefined) {
                var id = +params['id'];
                _this.navigated = true;
                _this.employeeService.getEmployee(id)
                    .then(function (employee) { return _this.employee = employee; });
            }
            else {
                _this.navigated = false;
                _this.employee = new employee_1.Employee();
            }
        });
    };
    EmployeeDetailComponent.prototype.save = function () {
        var _this = this;
        this.employeeService
            .save(this.employee)
            .then(function (employee) {
            _this.employee = employee;
            _this.goBack(employee);
        })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    EmployeeDetailComponent.prototype.goBack = function (savedEmployee) {
        if (savedEmployee === void 0) { savedEmployee = null; }
        this.close.emit(savedEmployee);
        if (this.navigated) {
            window.history.back();
        }
    };
    return EmployeeDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", employee_1.Employee)
], EmployeeDetailComponent.prototype, "employee", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EmployeeDetailComponent.prototype, "close", void 0);
EmployeeDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-employee-detail',
        templateUrl: 'employee-detail.component.html',
        styleUrls: ['employee-detail.component.css']
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService,
        router_1.ActivatedRoute])
], EmployeeDetailComponent);
exports.EmployeeDetailComponent = EmployeeDetailComponent;
//# sourceMappingURL=employee-detail.component.js.map
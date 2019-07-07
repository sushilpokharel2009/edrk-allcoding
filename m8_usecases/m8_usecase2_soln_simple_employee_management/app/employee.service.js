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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var EmployeeService = (function () {
    function EmployeeService(http) {
        this.http = http;
        this.employeesUrl = 'app/employees'; // URL to web api
    }
    EmployeeService.prototype.getEmployees = function () {
        return this.http
            .get(this.employeesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    EmployeeService.prototype.getEmployee = function (id) {
        return this.getEmployees()
            .then(function (employees) { return employees.find(function (employee) { return employee.id === id; }); });
    };
    EmployeeService.prototype.save = function (employee) {
        if (employee.id) {
            return this.put(employee);
        }
        return this.post(employee);
    };
    EmployeeService.prototype.delete = function (employee) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.employeesUrl + "/" + employee.id;
        return this.http
            .delete(url, { headers: headers })
            .toPromise()
            .catch(this.handleError);
    };
    // Add new employee
    EmployeeService.prototype.post = function (employee) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(this.employeesUrl, JSON.stringify(employee), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    // Update existing employee
    EmployeeService.prototype.put = function (employee) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.employeesUrl + "/" + employee.id;
        return this.http
            .put(url, JSON.stringify(employee), { headers: headers })
            .toPromise()
            .then(function () { return employee; })
            .catch(this.handleError);
    };
    EmployeeService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
var EmployeeService = (function () {
    function EmployeeService(http) {
        this.http = http;
        this.headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new RequestOptions({ headers: this.headers });
    }
    EmployeeService.prototype.addEmployee = function (employee) {
        return this.http.post('/employee', JSON.stringify(employee), this.options);
    };
    EmployeeService.prototype.deleteEmployee = function (employee) {
        return this.http.delete("/employee/" + employee._id, this.options);
    };
    EmployeeService.prototype.getEmployees = function () {
        return this.http.get('/employees').map(function (res) { return res.json(); });
    };
    EmployeeService.prototype.editEmployee = function (employee) {
        return this.http.put("/employee/" + employee._id, JSON.stringify(employee), this.options);
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], EmployeeService);
export { EmployeeService };
//# sourceMappingURL=../../../../src/app/services/employee.service.js.map
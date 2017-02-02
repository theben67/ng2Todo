var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastComponent } from '../shared/toast/toast.component';
import { EmployeeService } from '../services/employee.service';
var EmployeeComponent = (function () {
    function EmployeeComponent(http, employeeService, toast, formBuilder) {
        this.http = http;
        this.employeeService = employeeService;
        this.toast = toast;
        this.formBuilder = formBuilder;
        this.employees = [];
        this.isLoading = true;
        this.employee = {};
        this.isEditing = false;
        this.nom = new FormControl('', Validators.required);
        this.prenom = new FormControl('', Validators.required);
        this.mail = new FormControl('', Validators.required);
        this.numero = new FormControl('', Validators.required);
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        this.getEmployees();
        this.addEmployeeForm = this.formBuilder.group({
            nom: this.nom,
            prenom: this.prenom,
            mail: this.mail,
            numero: this.numero
        });
    };
    EmployeeComponent.prototype.addEmployee = function () {
        var _this = this;
        this.employeeService.addEmployee(this.addEmployeeForm.value).subscribe(function (res) {
            var newEmployee = res.json();
            _this.employees.push(newEmployee);
            _this.addEmployeeForm.reset();
            _this.toast.setMessage('item added successfully.', 'success');
        }, function (error) { return console.log(error); });
        this.getEmployees();
    };
    EmployeeComponent.prototype.getEmployees = function () {
        var _this = this;
        this.employeeService.getEmployees().subscribe(function (data) { return _this.employees = data; }, function (error) { return console.log(error); });
        console.log(this.employees);
    };
    EmployeeComponent.prototype.deleteEmployee = function (employee) {
        var _this = this;
        this.employeeService.deleteEmployee(employee).subscribe(function (res) {
            var pos = _this.employees.map(function (elem) { return elem._id; }).indexOf(employee._id);
            _this.employees.splice(pos, 1);
        }, function (error) { return console.log(error); });
        this.getEmployees();
    };
    EmployeeComponent.prototype.editEmployee = function (employee) {
        var _this = this;
        this.employeeService.editEmployee(employee).subscribe(function (res) {
            _this.employee = employee;
        }, function (error) { return console.log(error); });
    };
    return EmployeeComponent;
}());
EmployeeComponent = __decorate([
    Component({
        selector: 'app-emp',
        templateUrl: './employee.component.html'
    }),
    __metadata("design:paramtypes", [Http,
        EmployeeService,
        ToastComponent,
        FormBuilder])
], EmployeeComponent);
export { EmployeeComponent };
//# sourceMappingURL=../../../../src/app/employee/employee.component.js.map
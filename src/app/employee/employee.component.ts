import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

import { ToastComponent } from '../shared/toast/toast.component';

import { EmployeeService } from '../services/employee.service';


@Component({
  selector: 'app-emp',
  templateUrl: './employee.component.html'
})
export class EmployeeComponent {

  employees = [];
  isLoading = true;

  employee = {};
  isEditing = false;

  addEmployeeForm: FormGroup;
  nom = new FormControl('', Validators.required);
  prenom = new FormControl('', Validators.required);
  mail = new FormControl('', Validators.required);
  numero = new FormControl('', Validators.required);

  constructor(private http: Http,
              private employeeService: EmployeeService,
              public toast: ToastComponent,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getEmployees();
    this.addEmployeeForm = this.formBuilder.group({
      nom: this.nom,
      prenom: this.prenom,
      mail: this.mail,
      numero: this.numero
    });
  }


  addEmployee() {
    this.employeeService.addEmployee(this.addEmployeeForm.value).subscribe(
      res => {
        let newEmployee = res.json();
        this.employees.push(newEmployee);
        this.addEmployeeForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error)
    );
    this.getEmployees();
  }
  getEmployees() {
    this.employeeService.getEmployees().subscribe(
      data => this.employees = data,
      error => console.log(error)
    );
    console.log(this.employees)
  }
  deleteEmployee(employee){
    this.employeeService.deleteEmployee(employee).subscribe(
      res => {
        let pos = this.employees.map(elem => { return elem._id; }).indexOf(employee._id);
        this.employees.splice(pos, 1)
      },
      error => console.log(error)
    );
    this.getEmployees();
  }
  editEmployee(employee) {
    this.employeeService.editEmployee(employee).subscribe(
      res => {
        this.employee = employee;
      },
      error => console.log(error)
    );
  }
}

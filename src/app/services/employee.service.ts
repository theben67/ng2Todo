import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  addEmployee(employee): Observable<any> {
    return this.http.post('/employee', JSON.stringify(employee), this.options);
  }
  deleteEmployee(employee): Observable<any> {
    return this.http.delete(`/employee/${employee._id}`, this.options);
  }
  getEmployees(): Observable<any> {
    return this.http.get('/employees').map(res => res.json());
  }
  editEmployee(employee): Observable<any> {
    return this.http.put(`/employee/${employee._id}`, JSON.stringify(employee), this.options);
  }
}

import { Injectable }     from '@angular/core';
import { Headers, Http }  from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Car} from '../../app/interfaces/car';
import { Employee } from '../../app/model/employee';

@Injectable()
export class EmployeeSearchService {
  
  private headers = new Headers({'Content-Type': 'application/json'});
  private employeesUrl = '/users/employees';

  constructor(private http: Http) { }

  getEmployees(): Promise<Employee[]> {
    return this.http.get(this.employeesUrl + '/search-list')
                .toPromise().then(res => res.json()).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
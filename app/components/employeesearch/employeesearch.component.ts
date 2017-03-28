import { Component, OnInit ,OnChanges, Input, 
    trigger, state, animate, transition, style }      from '@angular/core';

import { Employee }               from '../../model/employee';
import { EmployeeSearchService }  from '../../services/EmployeesearchService';
import {Message} from 'primeng/primeng';

@Component({
  selector: 'employee-search',
  templateUrl: '/components/employeesearch/employeesearch.component.html',
  styleUrls: [ '/components/employeesearch/employeesearch.component.css' ],
  providers: [EmployeeSearchService],
  animations: [
    trigger('visibilityChanged', [
      state('shown' , style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('* => *', animate('.5s'))
    ])
  ]
})
export class EmployeeSearchCompleteComponent implements OnInit {

  employees: Employee[];

   displayDialog: boolean;
   
   //skills = [];
   
   emp1 = new Employee();
   newEmp: boolean;
 
   timer: any;
   
  constructor(private employeeSearchService: EmployeeSearchService) {
  }
  
    msgs: Message[] = [];
   
  getEmployees(): void {
    this.employeeSearchService.getEmployees().then(employees => this.employees = employees);
  }

  ngOnInit(): void {
    this.getEmployees();
  }
  
  showDialogToAdd() {
   this.newEmp = true;
   this.emp1 = new Employee();
      this.displayDialog = true;
       console.log('test Dialog');
    }
	
	save() {
        if(this.newEmp){
            this.employees.push(this.emp1);
			this.msgs = [];
			this.msgs.push({severity:'success', summary:'Successfully', detail:'Saved'});   
				clearTimeout(this.timer);
				this.timer = setTimeout(() => {
					this.msgs = [];
				}, 3000);
			}
			else{
            this.employees[this.findSelectedEmpIndex()] = this.emp1;
			this.msgs = [];
			this.msgs.push({severity:'success', summary:'Successfully', detail:'Updated'});   
				clearTimeout(this.timer);
				this.timer = setTimeout(() => {
					this.msgs = [];
				}, 3000);
			}
        this.emp1 = null;
        this.displayDialog = false;
		
		
    }

    delete() {
        this.employees.splice(this.findSelectedEmpIndex(), 1);
        this.emp1 = null;
        this.displayDialog = false;
		 this.msgs = [];
        this.msgs.push({severity:'error', summary:'Successfully', detail:'Deleted'});
		clearTimeout(this.timer);
		this.timer = setTimeout(() => {
			this.msgs = [];
		}, 3000);
    }
	
	 onRowSelect(event:any) {
        this.newEmp = false;
        this.emp1 = this.cloneEmp(event.data);
        this.displayDialog = true;
    }
	
	cloneEmp(c: Employee): Employee {
        let emp1 = new Employee();
        for(let prop in c) {
            emp1[prop] = c[prop];
        }
        return emp1;
    }
	
	findSelectedEmpIndex(): number {
		console.log(this.emp1);
		console.log(this.employees);
		 var index = -1;
			for(var i = 0, len = this.employees.length; i < len; i++) {
				if (this.employees[i].id === this.emp1.id) {
					index = i;
					break;
				}
			}
			return index;
		}
}
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_1 = require("../../model/employee");
var EmployeesearchService_1 = require("../../services/EmployeesearchService");
var EmployeeSearchCompleteComponent = (function () {
    function EmployeeSearchCompleteComponent(employeeSearchService) {
        this.employeeSearchService = employeeSearchService;
        //skills = [];
        this.emp1 = new employee_1.Employee();
        this.msgs = [];
    }
    EmployeeSearchCompleteComponent.prototype.getEmployees = function () {
        var _this = this;
        this.employeeSearchService.getEmployees().then(function (employees) { return _this.employees = employees; });
    };
    EmployeeSearchCompleteComponent.prototype.ngOnInit = function () {
        this.getEmployees();
    };
    EmployeeSearchCompleteComponent.prototype.showDialogToAdd = function () {
        this.newEmp = true;
        this.emp1 = new employee_1.Employee();
        this.displayDialog = true;
        console.log('test Dialog');
    };
    EmployeeSearchCompleteComponent.prototype.save = function () {
        var _this = this;
        if (this.newEmp) {
            this.employees.push(this.emp1);
            this.msgs = [];
            this.msgs.push({ severity: 'success', summary: 'Successfully', detail: 'Saved' });
            clearTimeout(this.timer);
            this.timer = setTimeout(function () {
                _this.msgs = [];
            }, 3000);
        }
        else {
            this.employees[this.findSelectedEmpIndex()] = this.emp1;
            this.msgs = [];
            this.msgs.push({ severity: 'success', summary: 'Successfully', detail: 'Updated' });
            clearTimeout(this.timer);
            this.timer = setTimeout(function () {
                _this.msgs = [];
            }, 3000);
        }
        this.emp1 = null;
        this.displayDialog = false;
    };
    EmployeeSearchCompleteComponent.prototype.delete = function () {
        var _this = this;
        this.employees.splice(this.findSelectedEmpIndex(), 1);
        this.emp1 = null;
        this.displayDialog = false;
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Successfully', detail: 'Deleted' });
        clearTimeout(this.timer);
        this.timer = setTimeout(function () {
            _this.msgs = [];
        }, 3000);
    };
    EmployeeSearchCompleteComponent.prototype.onRowSelect = function (event) {
        this.newEmp = false;
        this.emp1 = this.cloneEmp(event.data);
        this.displayDialog = true;
    };
    EmployeeSearchCompleteComponent.prototype.cloneEmp = function (c) {
        var emp1 = new employee_1.Employee();
        for (var prop in c) {
            emp1[prop] = c[prop];
        }
        return emp1;
    };
    EmployeeSearchCompleteComponent.prototype.findSelectedEmpIndex = function () {
        console.log(this.emp1);
        console.log(this.employees);
        var index = -1;
        for (var i = 0, len = this.employees.length; i < len; i++) {
            if (this.employees[i].id === this.emp1.id) {
                index = i;
                break;
            }
        }
        return index;
    };
    return EmployeeSearchCompleteComponent;
}());
EmployeeSearchCompleteComponent = __decorate([
    core_1.Component({
        selector: 'employee-search',
        templateUrl: '/components/employeesearch/employeesearch.component.html',
        styleUrls: ['/components/employeesearch/employeesearch.component.css'],
        providers: [EmployeesearchService_1.EmployeeSearchService],
        animations: [
            core_1.trigger('visibilityChanged', [
                core_1.state('shown', core_1.style({ opacity: 1 })),
                core_1.state('hidden', core_1.style({ opacity: 0 })),
                core_1.transition('* => *', core_1.animate('.5s'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [EmployeesearchService_1.EmployeeSearchService])
], EmployeeSearchCompleteComponent);
exports.EmployeeSearchCompleteComponent = EmployeeSearchCompleteComponent;
//# sourceMappingURL=employeesearch.component.js.map
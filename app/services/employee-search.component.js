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
var employee_search_service_1 = require("./service/employee-search.service");
var EmployeeSearchComponent = (function () {
    function EmployeeSearchComponent(employeeSearchService) {
        this.employeeSearchService = employeeSearchService;
    }
    EmployeeSearchComponent.prototype.getEmployees = function () {
        var _this = this;
        this.employeeSearchService.getEmployees().then(function (employees) { return _this.employees = employees; });
    };
    EmployeeSearchComponent.prototype.ngOnInit = function () {
        this.getEmployees();
    };
    return EmployeeSearchComponent;
}());
EmployeeSearchComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'employee-search',
        templateUrl: '../../views/employee-search.component.html',
        styleUrls: ['../../css/employee-search.component.css'],
        providers: [employee_search_service_1.EmployeeSearchService]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof employee_search_service_1.EmployeeSearchService !== "undefined" && employee_search_service_1.EmployeeSearchService) === "function" && _a || Object])
], EmployeeSearchComponent);
exports.EmployeeSearchComponent = EmployeeSearchComponent;
var _a;
//# sourceMappingURL=employee-search.component.js.map
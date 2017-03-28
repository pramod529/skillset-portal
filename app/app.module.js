"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var about_component_1 = require("./components/about/about.component");
var routes_1 = require("./routes");
var home_component_1 = require("./components/home/home.component");
var contact_component_1 = require("./components/contact/contact.component");
var login_component_1 = require("./components/login/login.component");
var datatable_component_1 = require("./components/datatable/datatable.component");
var autocomplete_component_1 = require("./components/autocomplete/autocomplete.component");
var datatablefilter_component_1 = require("./components/datatablefilter/datatablefilter.component");
var employeesearch_component_1 = require("./components/employeesearch/employeesearch.component");
var primeng_1 = require("primeng/primeng");
require("rxjs/add/operator/toPromise");
var forms_2 = require("@angular/forms");
var carservice_1 = require("./services/carservice");
var countryservice_1 = require("./services/countryservice");
var EmployeesearchService_1 = require("./services/EmployeesearchService");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            routes_1.routing,
            forms_1.ReactiveFormsModule,
            primeng_1.InputTextModule,
            primeng_1.DataTableModule,
            primeng_1.ButtonModule,
            primeng_1.DialogModule,
            forms_2.FormsModule,
            primeng_1.SelectButtonModule,
            primeng_1.SharedModule,
            primeng_1.MultiSelectModule,
            primeng_1.DropdownModule,
            primeng_1.SliderModule,
            primeng_1.AutoCompleteModule,
            primeng_1.FieldsetModule,
            primeng_1.TabMenuModule,
            primeng_1.GMapModule,
            primeng_1.MessagesModule,
            primeng_1.GrowlModule,
            primeng_1.PanelModule,
            primeng_1.FileUploadModule,
            primeng_1.PasswordModule,
            primeng_1.ScheduleModule,
            primeng_1.CalendarModule
        ],
        declarations: [
            app_component_1.AppComponent,
            about_component_1.AboutComponent,
            home_component_1.HomeComponent,
            contact_component_1.ContactComponent,
            login_component_1.LoginComponent,
            datatable_component_1.DataTableComponent,
            datatablefilter_component_1.DataTableFilterComponent,
            autocomplete_component_1.AutoCompleteComponent,
            employeesearch_component_1.EmployeeSearchCompleteComponent
        ],
        providers: [carservice_1.CarService, countryservice_1.CountryService, EmployeesearchService_1.EmployeeSearchService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home/home.component");
var about_component_1 = require("./components/about/about.component");
var contact_component_1 = require("./components/contact/contact.component");
var login_component_1 = require("./components/login/login.component");
var datatable_component_1 = require("./components/datatable/datatable.component");
var datatablefilter_component_1 = require("./components/datatablefilter/datatablefilter.component");
var autocomplete_component_1 = require("./components/autocomplete/autocomplete.component");
var employeesearch_component_1 = require("./components/employeesearch/employeesearch.component");
exports.routes = [
    { path: '', pathMatch: 'full', component: login_component_1.LoginComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'datatable', component: datatable_component_1.DataTableComponent },
    { path: 'datatablefilter', component: datatablefilter_component_1.DataTableFilterComponent },
    { path: 'autocomplete', component: autocomplete_component_1.AutoCompleteComponent },
    { path: 'searchEmployee', component: employeesearch_component_1.EmployeeSearchCompleteComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes, { useHash: true });
//# sourceMappingURL=routes.js.map
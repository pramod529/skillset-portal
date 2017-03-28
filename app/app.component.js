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
var AppComponent = (function () {
    function AppComponent() {
        this.name = "SKILLSET PORTAL";
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        styles: ["h1 {\n\tcolor: white;\n\tbackground: darkgray;\n\tpadding: 20px;\n}\n"],
        template: "\n<a [routerLink]=\"['/home']\">Home</a> | <a [routerLink]=\"['/about/', { id: 2 }]\">About</a> | <a [routerLink]=\"['/contact/']\">Contact Us</a> | <a [routerLink]=\"['/login/']\">LogIn</a> | <a [routerLink]=\"['/datatable/']\">DataTable</a>  | <a [routerLink]=\"['/datatablefilter/']\">DataTable Filter</a> | <a [routerLink]=\"['/autocomplete/']\">Autocomplete</a> | <a [routerLink]=\"['/searchEmployee/']\">Employee Search</a>\n<h1 style=\"padding-left: 35%;background: #deedf7;color: rgba(53, 82, 119, 0.72)\">{{name}}</h1>\n<router-outlet></router-outlet>",
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
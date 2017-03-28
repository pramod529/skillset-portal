import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    styles: [`h1 {
	color: white;
	background: darkgray;
	padding: 20px;
}
`],
    template: `
<a [routerLink]="['/home']">Home</a> | <a [routerLink]="['/about/', { id: 2 }]">About</a> | <a [routerLink]="['/contact/']">Contact Us</a> | <a [routerLink]="['/login/']">LogIn</a> | <a [routerLink]="['/datatable/']">DataTable</a>  | <a [routerLink]="['/datatablefilter/']">DataTable Filter</a> | <a [routerLink]="['/autocomplete/']">Autocomplete</a> | <a [routerLink]="['/searchEmployee/']">Employee Search</a>
<h1 style="padding-left: 35%;background: #deedf7;color: rgba(53, 82, 119, 0.72)">{{name}}</h1>
<router-outlet></router-outlet>`,
})
export class AppComponent {
    name: string = "SKILLSET PORTAL";

    constructor() {}
}

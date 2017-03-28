import { Route, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { DataTableComponent } from "./components/datatable/datatable.component";
import { DataTableFilterComponent } from "./components/datatablefilter/datatablefilter.component";
import { AutoCompleteComponent } from "./components/autocomplete/autocomplete.component";
import { EmployeeSearchCompleteComponent } from "./components/employeesearch/employeesearch.component";


export const routes: Route[] = [
    { path: '', pathMatch: 'full', component: LoginComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'login', component:LoginComponent},
    { path: 'home', component:HomeComponent},
    { path: 'datatable', component:DataTableComponent},
    { path: 'datatablefilter', component:DataTableFilterComponent}, 
    { path: 'autocomplete', component:AutoCompleteComponent},
    { path: 'searchEmployee', component:EmployeeSearchCompleteComponent}
];

export const routing = RouterModule.forRoot(routes, { useHash: true });

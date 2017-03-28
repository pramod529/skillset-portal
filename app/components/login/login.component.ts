import { Component } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'my-login',
    templateUrl: 'components/login/login.component.html',
    styleUrls: ['components/login/login.component.css']
})
export class LoginComponent {

    public loginForm = this.fb.group({
        name: ['', Validators.required],
        password: ['', Validators.required]
    });

    constructor(public fb: FormBuilder) {

    }
    doLogin() {
        console.log(event);
        console.log(this.loginForm.value);
        alert(this.loginForm.value.name);

    }
}
import { Component } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import {MenuItem} from 'primeng/primeng';
import {Message} from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
@Component({
    selector: 'my-contact',
    templateUrl: 'components/contact/contact.component.html',
    styleUrls: ['components/contact/contact.component.css']
})
export class ContactComponent {
    msgs: Message[] = [];
    
    userform: FormGroup;
    
    submitted: boolean;
    
    genders: SelectItem[];
        
    description: string;
    
    constructor(private fb: FormBuilder) {}
    
    ngOnInit() {
        this.userform = this.fb.group({
            'firstname': new FormControl('', Validators.required),
            'lastname': new FormControl('', Validators.required),
            'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
            'description': new FormControl(''),
            'gender': new FormControl('', Validators.required)
        });
        
        this.genders = [];
        this.genders.push({label:'Select Gender', value:''});
        this.genders.push({label:'Male', value:'Male'});
        this.genders.push({label:'Female', value:'Female'});
    }
    
    onSubmit(value: string) {
        this.submitted = true;
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Success', detail:'Form Submitted'});
    }
    
    get diagnostic() { return JSON.stringify(this.userform.value); }
}
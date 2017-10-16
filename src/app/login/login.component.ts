import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { AlertService, AuthenticationService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    loginForm: FormGroup;
    submitted: boolean;
    public events: any[] = [];

    constructor (private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {

        this.createForm();

        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    }

    createForm() {

        this.loginForm = this.formBuilder.group({
            email: ['', [<any>Validators.required, <any>Validators.email]],
            password: ['', [<any>Validators.required]]
        });
    }

    login(model: any, isValid: boolean) {
        this.loading = true;
        this.authenticationService.login(this.model.email, this.model.password)
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
    }
}

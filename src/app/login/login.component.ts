import { AppStateService } from './../app-state.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService, UserService } from '../_services';

//import { AuthenticationService, UserService } from '@app/_services';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userservice : UserService,
        public appstateservice : AppStateService
    ) {
        // redirect to home if already logged in
        if (this.appstateservice.username) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        let payload={"user":
        {"email":this.loginForm.value.username,
         "password":this.loginForm.value.password
        }}
        this.userservice.login(payload).subscribe(data=>{
          if(data){
            this.loading=false;
            console.log("logged in ****************",data);
            this.appstateservice.username=data.user.username;
            this.appstateservice.token=data.user.token;
            console.log('this.appstateservice.username',this.appstateservice.username);
            this.router.navigate(['/home']);
          }
        },(err)=>{
          console.log('err***',err);
          this.loading=false;
        })
        // this.authenticationService.login(this.f.username.value, this.f.password.value)
        //     .pipe(first())
        //     .subscribe({
        //         next: () => {
        //             this.router.navigate([this.returnUrl]);
        //         },
        //         error: error => {
        //             this.error = error;
        //             this.loading = false;
        //         }
        //     });
    }
}

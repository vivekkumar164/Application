import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../_services';
//import { AuthenticationService } from '@app/_services';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less']
})
export class SignUpComponent implements OnInit {
    private id;
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

      constructor(private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService) { }


      getFormValidationErrors() {
        Object.keys(this.loginForm.controls).forEach(key => {

        const controlErrors: ValidationErrors = this.loginForm.get(key).errors;
        if (controlErrors != null) {
              Object.keys(controlErrors).forEach(keyError => {
                console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
              });
            }
          });
        }

  onSubmit(){
    this.submitted = true;
    if (this.loginForm.invalid) {
      this.getFormValidationErrors();
      return;
  }

  this.loading = true;
    const usersKey = 'angular-9-jwt-refresh-token-users';
    const users = JSON.parse(localStorage.getItem(usersKey)) || [];
    users.push({ id: this.id+1,  firstName: this.f.firstname.value, lastName: this.f.lastname.value, username: this.f.username.value, password: this.f.password.value, refreshTokens: [] });
    console.log('users',users);
    this.loading = false;
    localStorage.setItem(usersKey, JSON.stringify(users));
  }


        // convenience getter for easy access to form fields
        get f() { return this.loginForm.controls; }

  ngOnInit(): void {
    const usersKey = 'angular-9-jwt-refresh-token-users';
    const users = JSON.parse(localStorage.getItem(usersKey)) || [];
    this.id=users.length;
    console.log(this.id);
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
  });
  }

}

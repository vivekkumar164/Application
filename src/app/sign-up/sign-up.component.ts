import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService, UserService } from '../_services';
//import { AuthenticationService, UserService } from '@app/_services';

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

    public user={"email":"vivek123@gmail.com", "password":"vivekqwertyuiop", "username":"vivek12234"};

      constructor(private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private userservice : UserService) { }


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

  // this.loading = true;
  //   const usersKey = 'angular-9-jwt-refresh-token-users';
  //   const users = JSON.parse(localStorage.getItem(usersKey)) || [];
  //   users.push({ id: this.id+1,  firstName: this.f.firstname.value, lastName: this.f.lastname.value, username: this.f.username.value, password: this.f.password.value, refreshTokens: [] });
  //   console.log('users',users);
  //   this.loading = false;
  //   localStorage.setItem(usersKey, JSON.stringify(users));
  console.log(this.loginForm.value.email);
   this.user.email=this.loginForm.value.email;
   this.user.password=this.loginForm.value.password;
   this.user.username=this.loginForm.value.username;
  let payload ={
    "user":{
      "email":this.loginForm.value.email,
      "password":this.loginForm.value.password,
      "username":this.loginForm.value.username
  }}
  this.userservice.signup(payload).subscribe(data=>{
    if(data){
      console.log("**** success *****");
    }
  },
  (err)=>{
    console.log("error*********",err);
  })
  }


        // convenience getter for easy access to form fields
        get f() { return this.loginForm.controls; }

  ngOnInit(): void {
    const usersKey = 'angular-9-jwt-refresh-token-users';
    const users = JSON.parse(localStorage.getItem(usersKey)) || [];
    this.id=users.length;
    console.log(this.id);
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      username: ['', Validators.required],

  });
  }

}

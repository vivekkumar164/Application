import { Router } from '@angular/router';
import { AppStateService } from './app-state.service';
import { Component } from '@angular/core';

import { AuthenticationService } from './_services';
import { User } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    user: User;

    constructor(private authenticationService: AuthenticationService,
      private appstateservice : AppStateService,
      public router:Router) {
        this.user=this.appstateservice.username;
    }

    ngOnInit(){
      setInterval(()=>{
        this.user=this.appstateservice.username;
      },1000);


    }

    logout() {
      this.appstateservice.username='';
       this.router.navigate(['/login']);
    }
}

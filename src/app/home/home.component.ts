import { AppStateService } from './../app-state.service';
import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../_models';

//import { User } from '@app/_models';
import { UserService } from '../_services';
//import { UserService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    users: User[];
    username;
    allArticles =[];

    constructor(private userService: UserService,
      private appstateservice : AppStateService
      ) { }

    ngOnInit() {
      this.username=this.appstateservice.username;
        // this.loading = true;
        // this.userService.getAll().pipe(first()).subscribe(users => {
        //     this.loading = false;
        //     this.users = users;
        // });
        this.userService.getAllArticles().subscribe(data=>{
          if(data){

            this.allArticles=data.articles;
            console.log(' this.allArticles', this.allArticles);
          }
        },(err)=>{
          console.log('err****',err);
        })
    }
}

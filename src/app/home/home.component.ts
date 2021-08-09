import { AppStateService } from './../app-state.service';
import { Component, ViewChild } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../_models';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

//import { User } from '@app/_models';
import { UserService } from '../_services';
//import { UserService } from '@app/_services';

@Component({ selector: 'home',templateUrl: 'home.component.html' })
export class HomeComponent {
  @ViewChild('tabset') tabset: TabsetComponent;
    loading = false;
    users: User[];
    username;
    allArticles =[];
    color=false;
    color1=false;
    color2=false;

    celebs=[{
      id:1,
      name:'Alex',
      details:'Java developer',
      followed:false
    },
    {
      id:2,
      name:'Alex',
      details:'Angular Developer',
      followed:false
    },
    {
      id:3,
      name:'jana',
      details:'Python Developer',
      followed:false
    },
    {
      id:4,
      name:'Rodrigo',
      details:'Javascript Developer',
      followed:false
    },
    {
      id:5,
      name:'karik',
      details:'node.js developer',
      followed:false

    }];

    followed=[{
      id:6,
      name:'Shankari Reddy',
      details:'node.js developer',
      followed:true
    },
    {
      id:6,
      name:'Vishal kumar',
      details:'node.js developer',
      followed:true
    }]

    constructor(private userService: UserService,
      public appstateservice : AppStateService
      ) { }
      Avtarclicked(){

      }

      follow(){
        this.color = !this.color;
        console.log(this.color);
      }
      follow1(){
        this.color1 = !this.color;
        console.log(this.color1);
      }
      follow2(){
        this.color2 = !this.color;
        console.log(this.color2);
      }
    ngOnInit() {
      this.username=this.appstateservice.username;
      console.log(this.username);

     }
}

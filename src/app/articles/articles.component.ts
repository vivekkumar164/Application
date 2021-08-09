import { AppStateService } from './../app-state.service';
//import { UserService } from '@app/_services';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(private userservice : UserService,
    private appstateservice : AppStateService) { }
    allArticles =[];
  ngOnInit(): void {

    this.userservice.getAllArticles().subscribe(data=>{
      if(data){

        this.allArticles=data.articles;
        console.log(' this.allArticles', this.allArticles);
      }
    },(err)=>{
      console.log('err****',err);
    })
}
  }



import { UserService } from './../_services/user.service';
import { AppStateService } from './../app-state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-article',
  templateUrl: './selected-article.component.html',
  styleUrls: ['./selected-article.component.css']
})
export class SelectedArticleComponent implements OnInit {
  public selectedArticle;
  public selectedAuthor;
  constructor(private appstateservice:AppStateService,
    private userservice:UserService) { }

  ngOnInit(): void {
    //this.selectedArticle=this.appstateservice.selectedArticle;
    this.selectedAuthor=this.appstateservice.username;
    this.userservice.getArticlebyAuthor(this.selectedAuthor).subscribe(data=>{
      if(data){
        console.log('selected article',data);
        this.selectedArticle=JSON.stringify(data);
        this.appstateservice.selectedArticle=data;
      }
    },err=>{
      console.log('err***',err);

    })
  }

}

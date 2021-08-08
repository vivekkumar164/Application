import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//import { environment } from '@environments/environment';
import { User } from '../_models';
import { environment } from 'src/environments/environment.prod';
//import { User } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    public signup(obj :any){
      console.log('obj',obj);
      let url='https://conduit.productionready.io/api/users';
      return this.http.post<any>(url,obj);
    }

    public login(obj : any){
      console.log('obj',obj);
      let url='https://conduit.productionready.io/api/users/login';
      return this.http.post<any>(url,obj);
    }

    public getAllArticles(){
      let url='https://conduit.productionready.io/api/articles';
      return this.http.get<any>(url);
    }

    public getArticlesbyAuthor(){
      let url='https://conduit.productionready.io/api/articles?author=johnjacob';
      return this.http.get<any>(url);
    }

    public getFavByUsername(){
      let url='https://conduit.productionready.io/api/articles?favorited=jane';
      return this.http.get<any>(url);
    }

    public getAllArticlesByTag(){
      let url='https://conduit.productionready.io/api/articles?tag=dragons';
      return this.http.get<any>(url);
    }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  public username;
  public token;
  public selectedArticle
  constructor() { }
}

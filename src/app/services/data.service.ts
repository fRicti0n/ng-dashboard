import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private commentsUrl = 'http://jsonplaceholder.typicode.com/comments';
  private todosUrl = 'http://jsonplaceholder.typicode.com/todos';
  private usersUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private _http: Http) { }

  getComments(): Observable<any> {
    return this._http.get(this.commentsUrl);
  }

  getTodos(): Observable<any> {
    return this._http.get(this.todosUrl);
  }

  getUsers(): Observable<any> {
    return this._http.get(this.usersUrl);
  }
}

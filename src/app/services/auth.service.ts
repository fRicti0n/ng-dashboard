import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = 'https://reqres.in/api/';

  constructor(private _http: Http) { }

  signup(payload): Observable<any> {
    return this._http.post(this.authUrl + 'register', payload, {headers: this.setHeader()});
  }

  signin(payload): Observable<any> {
    return this._http.post(this.authUrl + 'login', payload, {headers: this.setHeader()});
  }

  setUser(token) {
    localStorage.setItem('token', token);
  }

  private setHeader() {
    const header = new Headers({'Content-Type': 'application/json'});
    return header;
  }
}

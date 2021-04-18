import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './userform/User';

@Injectable({
  providedIn: 'root'
})
export class UserService{

  constructor(private http: HttpClient) { }
  save(user:User){
    return this.http.post('http://localhost:8081/user', user, { headers: { "content-type":'application/json'}});
    this.http.post('/user', user);
  }
}

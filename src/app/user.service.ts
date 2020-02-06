import { Injectable } from '@angular/core';
import {User} from './user'
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  addUser(u:User):Observable<User>
  {
    const url="http://localhost:8080/frontend/add";
    alert("user added successfully!!!")
    return this.http.post<User>(url,u);
  }

  updateUser(u:User):Observable<User>
  {
    const url="http://localhost:8080/frontend/update";
    alert("user added successfully!!!")
    return this.http.put<User>(url,u);
  }

  displayUsers():Observable<User[]>
  {
    const url="http://localhost:8080/frontend/displayusers";
    return this.http.get<User[]>(url);
    
  }

  deleteUser(u:User):Observable<User>
  {
    let url="http://localhost:8080/frontend/delete/";
    const finalurl=`${url}${u.userid}`;
    return this.http.delete<User>(finalurl);
  }
 }

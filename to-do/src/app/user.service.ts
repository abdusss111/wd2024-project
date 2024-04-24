import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Folder, User} from './models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL: string = 'http://localhost:8000/api'
  constructor(private client: HttpClient) {
  }

  getUser(username:string): Observable<User>{
    return this.client.get<User>(`${this.BASE_URL}/user/${username}`)
  }

  editUser(username:string, userData: any): Observable<User>{
    return this.client.put<User>(`${this.BASE_URL}/user/${username}`, userData)
  }

}

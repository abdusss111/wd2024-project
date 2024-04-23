import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Task } from "./models"

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  BASE_URL: string = 'http://localhost:8000/api'

  constructor(private client: HttpClient) { }

  getTask(user_id: number): Observable<Task>{
    return this.client.get<Task>(`${this.BASE_URL}/user/${user_id}/tasks`);
  }

  addTask(user_id: number, taskData: any): Observable<Task> {
    return this.client.post<Task>(`${this.BASE_URL}/user/${user_id}/tasks`, taskData);
  }
}

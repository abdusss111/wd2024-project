// // task.service.ts
//
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class TaskService {
//   private apiUrl = 'http://localhost:8000';
//
//   constructor(private http: HttpClient) {}
//
//   addTask(user: string, taskText: string, deadline: Date): Observable<any> {
//     return this.http.post<any>(this.apiUrl, { user, taskText, deadline });
//   }
// }

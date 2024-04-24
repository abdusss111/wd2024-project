import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonalTasksService {
  private baseUrl = 'http://localhost:8000/api'; // Base URL for API

  constructor(private http: HttpClient) {}

  private folders: string[] = [];

  createFolder(folder: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.folders.push(folder);
      resolve();
    });
  }

  deleteFolder(index: number): Promise<void> {
    return new Promise((resolve, reject) => {
      this.folders.splice(index, 1);
      resolve();
    });
  }

  getFolders(userId: number): Observable<string[]> {
    const url = `${this.baseUrl}/folders/${userId}`;
    return this.http.get<string[]>(url);
  }

  // getTasks(): Promise<Map<string, string[]>> {
  //   return Promise.resolve(this.tasks);
  // }
  getTasks(userId: number): Observable<Map<string, string[]>> {
    const url = `${this.baseUrl}/user/${userId}/tasks`;
    return this.http.get<Map<string, string[]>>(url);
  }
}

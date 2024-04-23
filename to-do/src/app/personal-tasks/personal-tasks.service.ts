import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersonalTasksService {
  constructor() {}

  private folders: string[] = [
    'General',
    'Work',
    'Personal',
    'Shopping',
    'Others',
  ];

  private tasks: Map<string, string[]> = new Map([
    ['General', ['Buy groceries', 'Clean the house', 'Pay bills']],
    [
      'Work',
      ['Finish the report', 'Send the email', 'Prepare the presentation'],
    ],
    ['Personal', ['Call mom', 'Go to the gym', 'Read a book']],
    [
      'Shopping',
      ['Buy a new phone', 'Get a new laptop', 'Purchase a new camera'],
    ],
    ['Others', ['Go to the doctor', 'Visit the dentist', 'Meet with friends']],
  ]);

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

  getFolders(): Promise<string[]> {
    return Promise.resolve(this.folders);
  }

  getTasks(): Promise<Map<string, string[]>> {
    return Promise.resolve(this.tasks);
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PersonalTasksService } from './personal-tasks.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personal-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './personal-tasks.component.html',
  styleUrl: './personal-tasks.component.css',
})
export class PersonalTasksComponent implements OnInit {
  private personalTasksService: PersonalTasksService;

  constructor(personalTasksService: PersonalTasksService) {
    this.personalTasksService = personalTasksService;
  }

  ngOnInit(): void {
    this.personalTasksService.getFolders().then((folders) => {
      this.folders = folders;
      this.selectedFolder = folders[0];
    });

    this.personalTasksService.getTasks().then((tasks) => {
      this.tasks = tasks;
    });
  }

  folders: string[] = [];
  tasks: Map<string, string[]> = new Map();

  selectedFolder: string = '';
  newFolder: string = '';

  onSelectFolder(folder: string): void {
    this.selectedFolder = folder;
  }

  async onCreateFolder(): Promise<void> {
    if (this.newFolder.trim() === '') return;

    await this.personalTasksService.createFolder(this.newFolder);

    await this.personalTasksService.getFolders().then((folders) => {
      this.folders = folders;
      this.selectedFolder = folders[0];
    });

    this.newFolder = '';
  }
}

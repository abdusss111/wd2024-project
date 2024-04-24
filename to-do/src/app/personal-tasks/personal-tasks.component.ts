import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { PersonalTasksService } from './personal-tasks.service';
import { FormsModule } from '@angular/forms';
import { FolderService } from '../folder.service';
import { Folder } from '../models';

@Component({
  selector: 'app-personal-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './personal-tasks.component.html',
  styleUrl: './personal-tasks.component.css',
})
export class PersonalTasksComponent implements OnInit {
  private personalTasksService: PersonalTasksService;
  private folderService: FolderService;

  constructor(
    personalTasksService: PersonalTasksService,
    folderService: FolderService
  ) {
    this.personalTasksService = personalTasksService;
    this.folderService = folderService;
  }

  ngOnInit(): void {
    this.folderService.getFolders().then((folders) => {
      this.folders = folders;
    });

    // this.personalTasksService.getTasks().then((tasks) => {
    //   this.tasks = tasks;
    // });
  }

  folders: Folder[] = [];
  // tasks: Map<Folder, string[]> = new Map();

  selectedFolder: number = -1;
  newFolder: string = '';
  highlightedFolder: number = -1;

  onSelectFolder(index: number): void {
    this.selectedFolder = index;
  }

  async onCreateFolder(): Promise<void> {
    if (this.newFolder.trim() === '') return;

    await this.folderService.createFolder(this.newFolder);

    this.folders = await this.folderService.getFolders();
    this.selectedFolder = -1;

    this.newFolder = '';
  }

  async onDeleteFolder(folderId: number): Promise<void> {
    await this.folderService.deleteFolder(folderId);

    this.folders = await this.folderService.getFolders();
    this.selectedFolder = -1;
  }

  showDeleteButton(index: number): void {
    this.highlightedFolder = index;
  }

  hideDeleteButton(index: number): void {
    this.highlightedFolder = -1;
  }
}

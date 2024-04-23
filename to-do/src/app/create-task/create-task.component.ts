import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { CreateTaskService } from "./create-task.service";
import { Folder } from "../models";

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  imports: [
    FormsModule,
    CommonModule
  ],
  standalone: true,
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  folders!: Folder[];
  folder: string = '';
  deadline: Date | undefined;
  title: string = '';
  taskText: string = '';
  file: File | undefined;

  constructor(private createTaskService: CreateTaskService) { }

  ngOnInit() {
    this.getFolders();
  }

  getFolders() {
    const userId = Number(localStorage.getItem("id")) // Replace 1 with the actual user id
    this.createTaskService.getFolderByUser(userId).subscribe((folders) => {
      this.folders = folders;
    });
  }

  addTask(folder: any, deadline: any, title: any, taskText: any, file: any) {
    alert(`${folder}, ${deadline}, ${title}, ${taskText}, ${file}`)
  }
}

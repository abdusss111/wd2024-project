import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-create-task',
  standalone: true,
    imports: [
      FormsModule,
      ReactiveFormsModule,
      CommonModule
    ],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {
  folder: string = '';
  deadline: Date | undefined;
  title: string = '';
  taskText: string = '';
  file: File | undefined;

  addTask(folder: any, deadline: any, title: any, taskText: any, file: any){
    alert(`${folder}, ${deadline}, ${title}, ${taskText}, ${file}`)
  }

}

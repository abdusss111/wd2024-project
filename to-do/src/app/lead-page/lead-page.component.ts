import { Component } from '@angular/core';
// import { TaskService } from '../task.service';
import {FormsModule} from "@angular/forms";
@Component({
  selector: 'app-lead-page',
  templateUrl: './lead-page.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./lead-page.component.css']
})
export class LeadPageComponent {
  selectedUser: string = '';
  deadline: Date | undefined;
  taskText: string = '';
  addTask(){

  }
  // constructor(private taskService: TaskService) {}
  //
  // addTeamTask(): void {
  //   if (!this.selectedUser || !this.teamTaskText || !this.deadline) {
  //     console.error('Please fill in all fields');
  //     return;
  //   }
  //
  //   this.taskService.addTask(this.selectedUser, this.teamTaskText, this.deadline).subscribe(response => {
  //       console.log('Task added successfully:', response);
  //       // Reset form fields after successful addition
  //       this.selectedUser = '';
  //       this.teamTaskText = '';
  //       this.deadline = undefined;
  //     }, error => {
  //       console.error('Error adding task:', error);
  //       // Handle error appropriately
  //     });
  // }
}

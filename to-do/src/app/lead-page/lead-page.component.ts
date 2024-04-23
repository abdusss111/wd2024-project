import { Component, OnInit } from '@angular/core';
import { User } from '../models';
import { LeadPageService } from './lead-page.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { TaskService } from '../task.service';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-lead-page',
  templateUrl: './lead-page.component.html',
  styleUrls: ['./lead-page.component.css'],
})
export class LeadPageComponent implements OnInit {
  currName: string = '';
  currId: number | undefined;
  title: string = '';
  selectedUser: string = '';
  deadline: Date | undefined;
  taskText: string = '';
  usersByTeam: User[] = []; // Initialize as an empty array
  constructor(
    private leadPageService: LeadPageService,
    private taskService: TaskService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.getUsersByTeam();
  }

  getUsersByTeam() {
    const teamId = Number(localStorage.getItem('team_id')) + 1; // Replace 1 with the actual team id
    this.leadPageService.getUserByTeam(teamId).subscribe(
      (usersByTeam) => {
        this.usersByTeam = usersByTeam;
      },
      (error) => {
        console.error('Error fetching users by team:', error);
      }
    );
  }

  addTeamTask() {
    if (
      this.taskText == '' ||
      this.title == '' ||
      this.selectedUser == '' ||
      this.deadline == undefined
    ) {
      alert('Fill in all fields');
    } else {
      this.userService.getUser(this.selectedUser).subscribe((data: User) => {
        localStorage.setItem('currId', String(data.id)),
          (this.currName = data.name);
      });
      const NewTask = {
        created_by: localStorage.getItem('name'),
        deadline: this.deadline,
        title: this.title,
        taskText: this.taskText,
      };
      this.taskService
        .addTask(Number(localStorage.getItem('currId')), NewTask)
        .subscribe((data) => {
          alert(
            `Task added, deadline: ${this.deadline}, title: ${this.title}, description: ${this.taskText},`
          );
          this.deadline = undefined;
          this.taskText = '';
          this.title = '';
          this.selectedUser = '';
        });
    }
  }
}

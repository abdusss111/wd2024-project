import { Component, OnInit } from '@angular/core';
import { User } from '../models';
import { LeadPageService } from './lead-page.service';

@Component({
  selector: 'app-lead-page',
  templateUrl: './lead-page.component.html',
  styleUrls: ['./lead-page.component.css'],
})
export class LeadPageComponent implements OnInit {
  selectedUser: string = '';
  deadline: Date | undefined;
  taskText: string = '';

  usersByTeam: User[] = []; // Initialize as an empty array

  constructor(private leadpageService: LeadPageService) {}

  ngOnInit() {
    this.getUsersByTeam();
  }

  getUsersByTeam() {
    const teamId = 1; // Replace 1 with the actual team id
    this.leadpageService.getUserByTeam(teamId).subscribe(
      (usersByTeam) => {
        this.usersByTeam = usersByTeam;
      },
      (error) => {
        console.error('Error fetching users by team:', error);
        // Handle error (e.g., show error message to user)
      }
    );
  }

  addTeamTask(selectedUser: any, deadline: any, taskText: any) {
    console.log('new team task added');
    alert(`user:${selectedUser}, deadline:${deadline}, task:${taskText}`);
  }
}

import { Component, OnInit } from '@angular/core';
import { User } from '../models';
import { LeadPageService } from './lead-page.service';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import {AuthenticationComponent} from "../authentication/authentication.component";

@Component({
  selector: 'app-lead-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    
  ],
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
    const teamId = Number(localStorage.getItem("team_id"))+1; // Replace 1 with the actual team id
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

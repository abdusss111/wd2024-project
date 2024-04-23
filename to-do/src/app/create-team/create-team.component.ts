import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TeamService } from './create-team.service';
import { Team } from '../models';

@Component({
  selector: 'app-create-team',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './create-team.component.html',
  styleUrl: './create-team.component.css'
})
export class CreateTeamComponent {
  teamForm = this.formBuilder.group({
    teamName: ['', Validators.required],
    teammates: this.formBuilder.array([
      this.formBuilder.control('', [Validators.email])
    ])
  })

  constructor(
    private formBuilder: FormBuilder,
    private teamService: TeamService,
  ) { }


  // Return a teammates
  get teammates() {
    return this.teamForm.get('teammates') as FormArray;
  }

  // Add a new <input>
  addTeammate() {
    if (this.teammates.length >= 5) alert("You reach maximum of team members")
    else this.teammates.push(this.formBuilder.control(''));
  }

  validateFields() {
    const teamName = this.teamForm.get("teamName")
    if (teamName?.invalid) {
      alert('Team name is required.');
      const teamNameField = document.getElementById('team-name');
      if (teamNameField) {
        teamNameField.focus();
      }
      return false;
    }

    // Check if any teammate email is empty
    const teammatesArray = this.teamForm.get('teammates') as FormArray;
    for (let i = 0; i < teammatesArray.length; i++) {
      const teammateControl = teammatesArray.at(i);
      if (!teammateControl.value || teammateControl.value.trim() === '') {
        alert('Teammate email is required.');
        return false;
      }
    }

    // Check if any teammate email is invalid
    for (let i = 0; i < teammatesArray.length; i++) {
      const teammateControl = teammatesArray.at(i);
      if (teammateControl.invalid) {
        alert('Invalid email format for teammate.');
        return false;
      }
    }
    return true;
  }

  // There will be a logic of using service with POST request
  onSubmit() {
    if (this.validateFields()) {
      const teamNameValue = this.teamForm.get('teamName')?.value ?? '';

      const newTeam: Team = {
        name: teamNameValue
      };
      // Make a POST request to create the new team
      this.teamService.createTeam(newTeam).subscribe(
        (response) => {
          alert('Team created successfully!');
          console.log(response); // Log the response from the server
          this.teamForm.reset(); // Reset the form after successful submission
        }
      );
    }
  }
}

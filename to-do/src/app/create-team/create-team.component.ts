import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

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
    teamName: '',
    teammates: this.formBuilder.array([this.formBuilder.control('')])
  })

  constructor(private formBuilder: FormBuilder) { }


  // Return a teammates
  get teammates() {
    return this.teamForm.get('teammates') as FormArray;
  }

  // Add a new <input>
  addTeammate() {
    if(this.teammates.length >= 5) alert("You reach maximum of team members")
    else this.teammates.push(this.formBuilder.control(''));
  }

  validateFields(){
    // Check if teamName is empty
    if (this.teamForm.get('teamName')?.value === '') {
      alert('Team name is required.');
      const teamNameField = document.getElementById('team-name');
      if (teamNameField) {
        teamNameField.focus();
      }
      return false; // Prevent further execution of the function
    }
  
    // Check if any teammate email is empty
    const teammatesArray = this.teamForm.get('teammates') as FormArray;
    for (let i = 0; i < teammatesArray.length; i++) {
      const teammateEmail = teammatesArray.at(i)?.value.trim();
      if (teammateEmail === '') {
        alert('Teammate email is required.');
        const teammateField = document.getElementById(`teammate`);
        if (teammateField) {
          teammateField.focus();
        }
        return false; // Prevent further execution of the function
      }
    }
    return true
  }

  // There will be a logic of using service with POST request
  onSubmit() {
    if(this.validateFields()){
      alert('Successfull!')
      console.log(this.teamForm.value)
      this.teamForm.reset()
      //POST request to server
    }
  }
}

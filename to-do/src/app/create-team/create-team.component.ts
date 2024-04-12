import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    teamName : '',
    teammates : this.formBuilder.array([this.formBuilder.control('')])
  })

  constructor(private formBuilder: FormBuilder) {}


  // Return a teammates
  get teammates(){
    return this.teamForm.get('teammates') as FormArray;
  }

  // Add a new <input>
  addTeammate(){
    this.teammates.push(this.formBuilder.control(''));
  }

  // There will be a logic of using service with POST request
  onSubmit(){
    console.log(this.teamForm.value)
  }
}

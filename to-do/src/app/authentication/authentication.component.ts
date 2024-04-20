import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent {
  containerActive: boolean = false;
  name: string = '';
  email: string = '';
  password: string = '';


  toggleContainer(): void {
    this.containerActive = !this.containerActive;
  }

  signUp(){
    console.log("reg attempt")
  }
  signIn(){
    console.log("login attempt")
  }
}

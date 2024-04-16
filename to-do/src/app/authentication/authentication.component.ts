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

  toggleContainer(): void {
    this.containerActive = !this.containerActive;
  }
}

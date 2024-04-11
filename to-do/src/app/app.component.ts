import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateTeamComponent } from './create-team/create-team.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CreateTeamComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to-do';
}

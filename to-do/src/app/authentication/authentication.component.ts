import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "./authentication.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
// import { AuthDataService } from "../auth-data.service";
import { User } from "../models";
import { UserService } from "../user.service";

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent implements OnInit  {
  containerActive: boolean = false;
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(
    private authenticationService: AuthenticationService,
    // private authDataService: AuthDataService,
    private userService: UserService
    ) {
  }

  ngOnInit() {

  }

  toggleContainer(): void {
    this.containerActive = !this.containerActive;
  }

  login() {
    this.authenticationService
      .signIn(this.username, this.password)
      .subscribe((data) => {
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);
        localStorage.setItem("logged", 'zzz')
      })
    this.userService
      .getUser(this.username)
      .subscribe((data) => {
        localStorage.setItem("name", data.name);
        localStorage.setItem("lastname", data.lastname);
        localStorage.setItem("team", String(data.team_id));
        localStorage.setItem("email", data.email);
        localStorage.setItem("password", data.password);
        localStorage.setItem("photo", data.photo);
        localStorage.setItem("id", String(data.id));
        localStorage.setItem("isLeader", String(data.isLeader));
        localStorage.setItem("username", data.username)


      })

    console.log( `${this.username} ${this.password}` )
    // this.username = ''
    this.password = ''
  }


  logout() {
    localStorage.setItem("logged", '');
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("name");
    localStorage.removeItem("lastname");
    localStorage.removeItem("team");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("photo");
    localStorage.removeItem("id");
    localStorage.removeItem("username");
    localStorage.removeItem("isLeader");

  }

  signUp(){
    console.log(`${this.password} ${this.email} ${this.password}`)
  }

  protected readonly Boolean = Boolean;
  protected readonly localStorage = localStorage;
}

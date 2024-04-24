import { Component, OnInit } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {UserService} from "../user.service";
import {Folder, User} from "../models";
import {Observable} from "rxjs";
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  photoUrl: string = '';
  isDisabled = true;
  inputValue = '';
  name: string = '';
  surname: string = '';
  team: string | undefined;
  email: string = '';
  password: string = '';
  user!: User;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.sendChanges();
  }

  username = localStorage.getItem("username")
  current_name = localStorage.getItem("name")
  current_lastname = localStorage.getItem("lastname")
  current_password = localStorage.getItem("password")
  current_team = localStorage.getItem("team")
  current_email = localStorage.getItem("email")
  edit() {
    this.isDisabled = false; // Изменяем состояние disabled при нажатии кнопки
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        this.photoUrl = e.target.result;
        // localStorage.setItem("photo", e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }


  sendChanges(){
    this.isDisabled = true;
    const updatedUserData = {
      username: localStorage.getItem("username"),
      name: this.name,
      lastname: this.surname,
      team: this.team,
      email: this.email,

    };

    this.userService.editUser(String(this.username), updatedUserData)
      .subscribe((updatedUser: User) => {
        console.log('User data updated successfully:', updatedUser);

      }, (error) => {
        console.error('Error updating user data:', error);
      });
    this.userService
      .getUser(String(this.username))
      .subscribe((data: User) => {
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


  }


}

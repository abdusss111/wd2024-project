import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  photoUrl: string = ''; // URL для отображения выбранной фотографии
  isDisabled = true; // По умолчанию инпуты отключены
  inputValue = ''; // Значение инпутов

  name: string = '';
  surname: string = '';
  team: string = '';
  email: string = '';
  password: string = '';

  toggleEdit() {
    this.isDisabled = !this.isDisabled; // Изменяем состояние disabled при нажатии кнопки
  }
  sentChanges(){
    this.isDisabled = !this.isDisabled;
    console.log("Changes sent")
  }
  onFileSelected(event: any): void {
    const file: File = event.target.files[0]; // Получаем выбранный файл
    if (file) {
      // Чтение файла как URL-адрес данных
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        this.photoUrl = e.target.result; // Устанавливаем URL в предварительном просмотре
      };
      reader.readAsDataURL(file); // Читаем файл как URL-адрес данных
    }
  }

}

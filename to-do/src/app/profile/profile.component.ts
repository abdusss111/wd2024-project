import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  photoUrl: string = ''; // URL для отображения выбранной фотографии
  isDisabled = true; // По умолчанию инпуты отключены
  inputValue = ''; // Значение инпутов

  toggleEdit() {
    this.isDisabled = !this.isDisabled; // Изменяем состояние disabled при нажатии кнопки
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

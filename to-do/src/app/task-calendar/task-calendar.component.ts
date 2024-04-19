import { Component, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarEvent, CalendarModule, CalendarMonthModule} from 'angular-calendar';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CalendarModule
  ],
  exports: [CalendarModule]
})
export class MyCalendarModule {}

@Component({
  selector: 'app-task-calendar',
  templateUrl: './task-calendar.component.html',
  standalone: true,
  imports: [
    CalendarMonthModule
  ],
  styleUrls: ['./task-calendar.component.css']
})
export class TaskCalendarComponent {
  viewDate: Date = new Date(); // Устанавливаем текущую дату по умолчанию
  events: CalendarEvent[] = []; // Массив событий пока пустой, вы можете заполнить его данными из базы данных или другого источника
}

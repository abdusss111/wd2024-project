import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { scheduler } from 'dhtmlx-scheduler';
import { PersonalTasksService } from '../personal-tasks/personal-tasks.service';
import { Task } from '../models';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'task-calendar',
  styleUrls: ['./task-calendar.component.css'],
  templateUrl: './task-calendar.component.html',
})
export class TaskCalendarComponent implements OnInit {
  @ViewChild('taskCalendarContainer', { static: true })
  schedulerContainer!: ElementRef;
  constructor(private personalTasksService: PersonalTasksService) {}

  ngOnInit() {
    scheduler.init(this.schedulerContainer.nativeElement, new Date(), 'month');
    this.loadTasks();
  }
  loadTasks(): void {
    // Assuming you have the user ID available, replace `userId` with the actual user ID
    const userId = Number(localStorage.getItem('id')); // Change this to the actual user ID
    this.personalTasksService.getTasks(userId).subscribe((tasks) => {
      this.populateScheduler(tasks);
    });
  }

  populateScheduler(tasks: Task[]): void {
    scheduler.clearAll();

    tasks.forEach((task: Task) => {
      scheduler.addEvent({
        text: task.title,
        start_date: new Date(task.deadline),
        end_date: new Date(task.deadline),
      });
    });
  }
}

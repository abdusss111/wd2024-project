import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { scheduler } from 'dhtmlx-scheduler';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'task-calendar',
  styleUrls: ['./task-calendar.component.css'],
  templateUrl: './task-calendar.component.html',
})
export class TaskCalendarComponent implements OnInit {
  @ViewChild('taskCalendarContainer', { static: true })
  schedulerContainer!: ElementRef;

  ngOnInit() {
    scheduler.init(this.schedulerContainer.nativeElement, new Date(), 'month');
  }
}

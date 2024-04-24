import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NotificationService } from './notifications.service';
import { Notification } from '../models';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {
  notifications !: Notification[]

  constructor(
    private notificationService: NotificationService,
  ){}

  ngOnInit(){
    this.notificationService.getNotifications().subscribe(notifications => this.notifications = notifications)
  }
}

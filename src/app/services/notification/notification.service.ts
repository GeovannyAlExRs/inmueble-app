import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationComponent } from './components/notification/notification.component';

@Injectable(
  /*{ providedIn: 'root' }*/
)
export class NotificationService {

  constructor(private snackBar: MatSnackBar) { }

  error(message: string) : void {
    this.snackBar.openFromComponent(NotificationComponent, {
      duration: 3000,
      data: { message },
      panelClass: ['app-notification-error']
    })
  }

  success(message: string) : void {
    this.snackBar.openFromComponent(NotificationComponent, {
      duration: 3000,
      data: { message },
      panelClass: ['app-notification-success']
    })
  }
}

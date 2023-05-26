import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NotificationService } from './services/notification/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showSpinner = false;
  title = 'inmueble-app';

  constructor(private firebase: AngularFirestore, private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.firebase.collection("test").stateChanges().subscribe(data => {
      console.log(data.map(users => users.payload.doc.data()))
    })

  }

  onToggleSpinner() : void {
    this.showSpinner = !this.showSpinner
  }

  onFilesChange(urls: string | string[]) :void {
    console.log('URLS: ', urls);
  }

  onSuccess() : void {
    this.notificationService.success("El procedimiento fue CORRECTO")
  }

  onError() : void {
    this.notificationService.error("El procedimiento fue INCORRECTO")
  }
}

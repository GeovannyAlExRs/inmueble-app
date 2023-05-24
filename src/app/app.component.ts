import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showSpinner = false;
  title = 'inmueble-app';

  constructor(private firebase: AngularFirestore) {}

  ngOnInit(): void {
    this.firebase.collection("test").stateChanges().subscribe(data => {
      console.log(data.map(users => users.payload.doc.data()))
    })

  }

  onToggleSpinner() : void {
    this.showSpinner = !this.showSpinner
  }
}

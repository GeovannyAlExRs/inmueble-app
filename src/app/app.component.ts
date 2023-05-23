import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'inmueble-app';

  constructor(private firebase: AngularFirestore) {}

  ngOnInit(): void {
    this.firebase.collection("test").stateChanges().subscribe(data => {
      console.log(data.map(users => users.payload.doc.data()))
    })

  }
}

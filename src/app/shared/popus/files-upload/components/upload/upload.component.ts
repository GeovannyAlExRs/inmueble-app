import { Component, OnInit, EventEmitter, Input, OnDestroy, Output } from '@angular/core';

import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { UploadTaskSnapshot } from '@angular/fire/storage';

import { Observable, Subject, lastValueFrom } from 'rxjs';

import { finalize, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit, OnDestroy {

  @Input() file!: File
  @Output() completed = new EventEmitter<string>()

  task!: AngularFireUploadTask

  snapshot$!:  Observable<UploadTaskSnapshot | any>
  percentage$!: Observable<number | any>

  downloadURL!: string

  private destroy = new Subject<void>()

  constructor(private fireStorage: AngularFireStorage) {}

  ngOnInit(): void {
    this.startUplLoad()
  }

  ngOnDestroy(): void {
    this.destroy.next()
    this.destroy.complete()
  }

  startUplLoad() : void {
    // PATH of the image => image/photo,jpg
    const path = `${this.file.type.split('/')[0]}/${Date.now()}_${this.file.name}`

    // Initialize the PATH
    const storageRef = this.fireStorage.ref(path)

    // Upload Image
    this.task = this.fireStorage.upload(path, this.file)

    // File image upload percentage
    this.percentage$ = this.task.percentageChanges()

    // Current Status of the Image
    this.snapshot$ = this.task.snapshotChanges() as Observable<UploadTaskSnapshot | any>

    // Deploy the image to the server
    this.snapshot$.pipe(
      // Evaluates the file upload task
      takeUntil(this.destroy),
      finalize(async () => {
        const storageRefObservable$ = storageRef.getDownloadURL() // Returns the URL of the image

        this.downloadURL = await lastValueFrom(storageRefObservable$) // get URL
        console.log("downloadURL: " + this.downloadURL);

        this.completed.next(this.downloadURL) // Completion of the PIPE operation
      })
    ).subscribe()
  }
}

import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilesUploadComponent } from './files-upload.component';

@Directive({
  selector: '[appFilesUpload]'
})
export class FilesUploadDirective {

  @Input() multiple!: boolean
  @Input() crop!: boolean

  @Output() imgURL = new EventEmitter<string | string[]>()

  constructor(private dialog: MatDialog) { }

  // TODO: Decorate (Listen to an event handler DOM)
  @HostListener('click', ['event']) onClick() {
    this.openDialog()
  }

  private openDialog() : void {
    const dialogRef = this.dialog.open(FilesUploadComponent, { width: '550px', height: '500px' })

    dialogRef.afterClosed().subscribe(result => {
      this.imgURL.emit(result || null)
    })
  }
}

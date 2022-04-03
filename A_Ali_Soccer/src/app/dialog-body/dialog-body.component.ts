import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';import { MatDialogRef, MatDialog, MatDialogModule } from "@angular/material/dialog";
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.scss']
})
export class DialogBodyComponent implements OnInit {
  @Output() newPlayerEvent: EventEmitter<Content> = new EventEmitter<Content>();
  newPlayer?: Content

  constructor( public dialogRef: MatDialogRef<DialogBodyComponent>){}

  ngOnInit(): void {
  }
  addPlayer(title: string, description: string, imgURL: string, creator: string, type: string): void {
     let np = this.newPlayer = {
      title: title,
      description: description,
      creator: creator,
      imgURL: imgURL,
      type: type,
    };
    console.log(np);
    this.dialogRef.close(np);
    this.newPlayerEvent.emit(this.newPlayer);

  }

  close(){
    this.dialogRef.close("Thanks for using me!");
  }
}

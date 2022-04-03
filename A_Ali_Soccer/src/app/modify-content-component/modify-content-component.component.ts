import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent implements OnInit {
  @Output() newPlayerEvent: EventEmitter<Content> = new EventEmitter<Content>();
  newPlayer?: Content;

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    let dialogRef = this.matDialog.open(DialogBodyComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(res => {
      this.newPlayer = {
        title: res.title,
        description: res.description,
        creator: res.creator,
        imgURL: res.imgURL,
        type: res.type,
      };
      console.log(this.newPlayer);
      this.newPlayerEvent.emit(this.newPlayer);
    })

  }


}

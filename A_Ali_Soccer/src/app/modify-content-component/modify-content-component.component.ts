import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent implements OnInit {
  @Output() newPlayerEvent: EventEmitter<Content> = new EventEmitter<Content>();
  newPlayer?: Content;

  constructor() { }

  ngOnInit(): void {
  }
  addPlayer(title: string, description: string, imgURL: string, creator: string, type: string): void {
    this.newPlayer = {
      title: title,
      description: description,
      creator: creator,
      imgURL: imgURL,
      type: type,
    };
    console.log(this.newPlayer);
    this.newPlayerEvent.emit(this.newPlayer);
  }
}

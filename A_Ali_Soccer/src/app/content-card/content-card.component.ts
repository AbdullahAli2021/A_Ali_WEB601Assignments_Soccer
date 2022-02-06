import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() content: Content;

  constructor() {
    this.content = {
      id: 0,
      title: "",
      imgURL:
      'https://angular.io/assets/images/logos/angular/angular.png'
      ,
      description: 'This is the body of the content',
      creator: 'news',
      type:'player',
      tags:["player","soccer","messi","argentina"]
      };



}
console1(content:Content) {
  console.log(content.id, this.content.title);
}

  ngOnInit(): void {
  }
}

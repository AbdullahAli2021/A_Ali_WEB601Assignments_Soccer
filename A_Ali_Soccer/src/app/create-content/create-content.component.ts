import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() newContentEvent = new EventEmitter<Content>();
  newContent? : Content;



  constructor() {

  }

  ngOnInit(): void {
  }
 failed = false;
  addContent(id: string, title: string, creator:string, imgURL: string, description: string, type: string, tags: string): void {
    let ourPromise = new Promise((success, fail) =>{
      if(id && title && description && creator){
      success(`Player succesfully added: ${title}`);
      }
      else{
      fail("Failure:you have to input the required fields");}
      })
      ourPromise.then((success)=>{
    this.newContent = {
      id: parseInt(id),
      title: title,
      creator: creator,
      imgURL: imgURL,
      description: description,
      type: type,
      tags: tags.split(",")
    };
    this.newContentEvent.emit(this.newContent);
    console.log("The promise succeeded and came back with the following message: ", success);

  })
  .catch((failureMessage) => {
    this.failed =true

    console.log("The promise failed and came back with the following message: ", failureMessage);


  });
  }

}

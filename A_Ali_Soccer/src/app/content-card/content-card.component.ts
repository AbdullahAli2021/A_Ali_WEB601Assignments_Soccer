import { Component, OnInit } from '@angular/core';
import { ContentList} from 'src/app/helper-files/content-list';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  messi:Content;
  constructor() {
    this.messi ={
    title:"messi",
    id: 0,
    type: "player",
    imgURL: "https://library.sportingnews.com/styles/crop_style_16_9_desktop/s3/2021-08/lionel-messi-barcelona_1yojy2xfu73113vl8uaoqe9yd.jpg?itok=0jOCYj7p",
    description: "Liionel messi the best player of the world",
    creator: "Barcelona"
  };

}
  ngOnInit(): void {
  }
}

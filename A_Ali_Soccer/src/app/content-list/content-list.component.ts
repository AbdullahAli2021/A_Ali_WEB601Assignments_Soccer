import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { SoccerService } from '../services/soccer.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  playerList:Content[];

  constructor(private SoccerService: SoccerService) {
    this.playerList = [];

   }

   IsTitle(inputTitle:string): boolean {
     let pltitle =this.playerList.find(t=> t.title == inputTitle);

     if(pltitle != null) {
       console.log(pltitle);
      return true;
    }

    else return false;
  }




  ngOnInit(): void {
    this.getPlayerFromServer();



  }

  getPlayerFromServer(): void{
    this.SoccerService.getContentObs().subscribe(playerArray => this.playerList = playerArray);
  }
  addContentToList(newContentItem: Content): void {
    this.SoccerService.addContent(newContentItem)
    .subscribe(newContentFromServer =>
    this.playerList.push(newContentFromServer)
    );
    this.playerList = [...this.playerList];
    this.getPlayerFromServer();
    console.log(this.playerList);


    }

}

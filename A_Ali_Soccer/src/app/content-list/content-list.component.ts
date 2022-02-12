import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  playerList:Content[];

  constructor() {
    this.playerList = [{
      id: 0,
      title: 'Lionnel Messi',
      description: "Best Player in the world",
      creator: "Fc Barcelona",
      imgURL: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTc5OTcxMjMwMjM1ODk0OTA2/gettyimages-972635212.jpg',
      type:'playmaker',
      tags:["player","soccer","messi","argentina"]
    },
    {
      id: 1,
      title: 'Cristiano Ronaldo',
      description: "2nd best player in the world",
      creator: "Real Madrid",
      imgURL: 'https://i.pinimg.com/280x280_RS/0e/b0/5f/0eb05fd878bbd84eef86552ad1cef71e.jpg',
      type:'striker',
      tags:["player","soccer","Ronaldo","Portugal"]
    },
    {
      id: 2,
      title: 'Neymar',
      description: "Best Brazilian Player",
      creator: "Fc Barcelona",
      imgURL: 'https://media.nu.nl/m/xrzxeovagj2j_sqr256.jpg/neymar-vindt-dat-hij-meer-respect-verdient-van-braziliaanse-fans-en-media.jpg',
      type:'winger',
      tags:["player","soccer","neymar","Brazil"]
    },
    {
      id: 3,
      title: 'Mohamed Salah',
      description: "Best Arab player",
      creator: "Liverpool",
      imgURL: 'https://i.redd.it/dqb6la086u981.jpg',
      tags:["player","soccer","Salah","Egypt"]
    },
    {
      id: 4,
      title: 'Kylian Mbappe',
      description: "Best young player",
      creator: "Paris",
      type: "winger",
      imgURL: 'https://media.nu.nl/m/ez9x3tka23sy_sqr256.jpg/mbappe-spreekt-zich-uit-ik-heb-psg-tijdig-gezegd-dat-ik-wil-vertrekken.jpg',
      tags:["player","soccer","mbappe","france"]
    },
    {
      id: 5,
      title: 'Luis Suarez',
      description: "Best striker in the world",
      creator: "Fc Barcelona",
      imgURL: 'https://futhead.cursecdn.com/static/img/fm/18/wcplayers/176580.png',
      tags:["player","soccer","suarez","uruguay"],

    },
    {
      id: 5,
      title: 'Pep Guardiola',
      description: "Best manager in the world",
      creator: "Man City",
      imgURL: 'https://media.nu.nl/m/wiox3qka1bs3_sqr256.jpg/guardiola-steunt-mishandelde-city-fan-met-shirt-het-gaat-beter-met-hem.jpg',
      type:'manager',
      tags:["manager","soccer","guardiola","spain"],

    }
  ];


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
  }

}

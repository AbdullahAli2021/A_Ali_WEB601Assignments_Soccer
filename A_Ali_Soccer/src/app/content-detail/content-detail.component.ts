import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { SoccerService } from '../services/soccer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {

  id?:number;
  content?:Content

  constructor(private route: ActivatedRoute, private soccerService: SoccerService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id') ?? "0"); // uses the + unary operator
      this.soccerService.getContentItem(this.id).subscribe(
        (c) => {
          this.content = c;
        });
    });
  }

}

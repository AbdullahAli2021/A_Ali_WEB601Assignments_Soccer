import { Component } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { LogUpdateService } from './log-update.service';
import { SoccerService } from './services/soccer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'A_Ali_Soccer';
  getId?: Content;
  constructor(private SoccerService: SoccerService, private logService: LogUpdateService ) {}

  ngOnInit(): void {
    this.logService.init();




}

}


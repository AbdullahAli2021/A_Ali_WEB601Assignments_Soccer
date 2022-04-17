import { ApplicationRef, Component } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { LogUpdateService } from './log-update.service';
import { SoccerService } from './services/soccer.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'A_Ali_Soccer';
  getId?: Content;
  constructor(private SoccerService: SoccerService, private logService: LogUpdateService,private appRef: ApplicationRef,
    // so we can check stability
    private updates: SwUpdate
    // so we can check for updates
     ) {}

  ngOnInit(): void {
    this.logService.init();
    this.updates.checkForUpdate();




}

}


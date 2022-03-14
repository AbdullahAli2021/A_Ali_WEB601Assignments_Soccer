import { Injectable } from '@angular/core';
import  {PLAYERLIST}  from '../helper-files/contentDb';
import { Content } from '../helper-files/content-interface';
import { Observable, of, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoccerService {



  constructor() { }
  getContentObs(): Observable<Content[]> {
    return of (PLAYERLIST);
  }

  getOneContentObs(id:number): Observable<Content> {
return of (PLAYERLIST[id])
  }
}

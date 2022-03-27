import { Injectable } from '@angular/core';
import  {PLAYERLIST}  from '../helper-files/contentDb';
import { Content } from '../helper-files/content-interface';
import { Observable, of, Subscription } from 'rxjs';
import { HttpClient, HttpHeaders } from'@angular/common/http';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class SoccerService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }
  getContentObs(): Observable<Content[]> {
    return this.http.get<Content[]>("api/content");
  }


  addContent(newContentItem: Content): Observable<Content>{
    console.log("added the new content: ", newContentItem);
    this.messageService.add("Content  loaded!");
    return this.http.post<Content>("api/content", newContentItem, this.httpOptions);
  }

}

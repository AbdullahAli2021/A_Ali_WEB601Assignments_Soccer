import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Content } from '../helper-files/content-interface';
import { PLAYERLIST } from '../helper-files/contentDb';



@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }
  createDb() {
    // setting it to the value of our array of content
    const content : Content[] = PLAYERLIST;
    return {content};
  }
  genId(content: Content[]): number {
    return content.length > 0 ?
    Math.max(...content.map(c => c.id ?? 0)) + 1 : 2000;
  }
}

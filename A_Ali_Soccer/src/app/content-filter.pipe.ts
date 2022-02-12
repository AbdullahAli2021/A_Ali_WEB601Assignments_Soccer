import { Pipe, PipeTransform } from '@angular/core';
import { ContentCardComponent } from './content-card/content-card.component';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'contentFilter'
})
export class ContentFilterPipe implements PipeTransform {

  transform(playerList: Content[],fType? :string): Content[] {
      if(!fType)
        return playerList.filter(f=> f.type == null);
      return playerList.filter(f=> f.type == fType );
    }
  }



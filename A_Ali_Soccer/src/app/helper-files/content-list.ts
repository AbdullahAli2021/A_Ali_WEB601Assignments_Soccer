import { Content } from 'src/app/helper-files/content-interface';

export class ContentList {
  static contentCount = 0;
  private _items: Content[];
  constructor(item: Content) {
  this._items = []; // initialize array
  this._items[0] = item;
  this.increaseCount();
  this.processContent(item);
  }
  get items(): Content[]{
    return this._items;
    }
    set items(newItems: Content[]) {
      this._items = newItems;
    }
  increaseCount() {
  return ++ContentList.contentCount;
  }

  processContent(contentItem: Content): string {
    console.log("<div>" + contentItem.title + "</div>"
    + "<div>" + contentItem.creator + "</div>"
    + "<div>" + contentItem.description + "</div>"
    + "<img src=" + contentItem.imgURL + ">"
    + "<div>" + contentItem.type + "</div>");
    return "<div>" + contentItem.title + "</div>"
    + "<div>" + contentItem.creator + "</div>"
    + "<div>" + contentItem.description + "</div>"
    + "<img src=" + contentItem.imgURL + ">"
    + "<div>" + contentItem.type + "</div>"
  }

  }

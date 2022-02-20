import { Directive, ElementRef, HostListener , Input} from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {

@Input() css1?:string;
@Input() value1?:string;
  constructor(private elm: ElementRef) {}
    @HostListener('mouseover') onHover(){
      if (this.css1=='under') {
        this.elm.nativeElement.style.textDecoration = this.value1;

      }
      else if (this.css1=='bold') {
        this.elm.nativeElement.style.fontWeight = this.value1;

      }

      }

      @HostListener('mouseout') onMouseOut(){
        if (this.css1=='under') {
          this.elm.nativeElement.style.textDecoration = 'none';

        }
        else if (this.css1=='bold') {
          this.elm.nativeElement.style.fontWeight = 'normal';

        }

        }
      }




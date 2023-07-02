import {Component, ElementRef, HostListener, Renderer2, ViewChild, ViewRef} from '@angular/core';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent {
  isEditing = false
  @ViewChild('bodyContent')
  contentBody! : ElementRef<HTMLDivElement> ;

  @ViewChild('container') container! : ElementRef<HTMLElement>

  handleClick() {
    this.isEditing = true
  }

  isBodyEmpty(){
    return this.contentBody.nativeElement.innerText !="";
  }
  constructor() {}

  @HostListener('document:click', ['$event'])
  clickHandle(event : Event){
    if(this.container.nativeElement.contains(event.target as Node) || this.container.nativeElement == event.target) {
      this.isEditing = true;
      // setTimeout(() => {
      //   this.contentBody.nativeElement.focus();
      // });

      
    } else {
      this.isEditing = false;
    }
  }
}

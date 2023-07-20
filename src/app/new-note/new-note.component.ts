import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';

import { NgxPopperjsPlacements, NgxPopperjsTriggers} from "ngx-popperjs";
import {SharedService} from "../shared.service";
import {Note} from "../../models/Note";

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent{

  isEditing = false
  @ViewChild('bodyContent')
  contentBody! : ElementRef<HTMLDivElement>;

  @ViewChild('title')
  contentTitle! : ElementRef<HTMLDivElement>;

  @ViewChild('container')
  container! : ElementRef<HTMLElement>

  note : Note = new Note();

  constructor(private sharedService : SharedService) {}
  get backgroundImageURL(): string | null {
    return `url(/assets/backgrounds/light/${this.note.backgroundImage})`;
  }

  titleChangeHandler = (e : Event)=>{
    this.note.title = (e.target as HTMLDivElement).innerText;
    return true;
  };

  bodyChangeHandler = (e : Event)=>{``
    this.note.body = (e.target as HTMLDivElement).textContent ?? '';
    return true;
  };

  @HostListener('document:click', ['$event'])
  clickHandle(event : Event){
    if(this.container.nativeElement.contains(event.target as Node) || this.container.nativeElement == event.target) {
      this.isEditing = true;

      // if(this.contentTitle && this.contentTitle.nativeElement.contains(event.target as Node) || this.contentTitle.nativeElement == event.target){
      //   setTimeout(() => {
      //     this.contentTitle.nativeElement.focus();
      //   });
      //   return;
      // }
      // if(this.contentBody.nativeElement.contains(event.target as Node) || this.contentBody.nativeElement == event.target){
      //   setTimeout(() => {
      //     this.contentBody.nativeElement.focus();
      //   });
      // }

    } else {
      this.isEditing = false;
      if(!this.note.isEmpty()){
        this.sharedService.newNoteCreated.emit(this.note);
      }
      this.note = new Note();
    }
  }
  protected readonly NgxPopperjsTriggers = NgxPopperjsTriggers;
  protected readonly NgxPopperjsPlacements = NgxPopperjsPlacements;


}

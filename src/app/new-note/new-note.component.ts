import {Component, ElementRef, HostListener, Renderer2, ViewChild, ViewRef} from '@angular/core';
import {NgxPopperjsDirective, NgxPopperjsPlacements, NgxPopperjsTriggers} from "ngx-popperjs";

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent {

  isEditing = true
  @ViewChild('bodyContent')
  contentBody! : ElementRef<HTMLDivElement>;

  @ViewChild('title')
  contentTitle! : ElementRef<HTMLDivElement>;

  @ViewChild('container')
  container! : ElementRef<HTMLElement>

  private _backgroundColor: string | null = null;
  getBackgroundColor(){
    return this._backgroundColor;
  }

  setBackgroundColor(color : string){
    this._backgroundColor = color;
  }

  private _backgroundImage: string | null = null;
  getBackgroundImage(): string | null {
    return `url(/assets/backgrounds/light/${this._backgroundImage})`;
  }

  setBackgroundImage(value: string | null) {
    this._backgroundImage = value;
  }

  handleClick() {
    this.isEditing = true
  }

  isBodyEmpty(){
    return this.contentBody.nativeElement.innerText !="";
  }
  constructor() {}
  //
  // @HostListener('document:click', ['$event'])
  // clickHandle(event : Event){
  //   if(this.container.nativeElement.contains(event.target as Node) || this.container.nativeElement == event.target) {
  //     this.isEditing = true;
  //
  //     if(this.contentTitle && this.contentTitle.nativeElement.contains(event.target as Node) || this.contentTitle.nativeElement == event.target){
  //       setTimeout(() => {
  //         this.contentTitle.nativeElement.focus();
  //       });
  //       return;
  //     }
  //     // if(this.contentBody.nativeElement.contains(event.target as Node) || this.contentBody.nativeElement == event.target){
  //       setTimeout(() => {
  //         this.contentBody.nativeElement.focus();
  //       });
  //     // }
  //
  //   } else {
  //     this.isEditing = false;
  //   }
  // }
  protected readonly NgxPopperjsDirective = NgxPopperjsDirective;
  protected readonly NgxPopperjsTriggers = NgxPopperjsTriggers;
  protected readonly NgxPopperjsPlacements = NgxPopperjsPlacements;


}

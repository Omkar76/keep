import {EventEmitter, Injectable, signal} from '@angular/core';
import {BehaviorSubject, Observable, scan, Subject, tap} from "rxjs";
import {Note} from "./note";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  isNavCollapsed= signal(false);

  toggleNav(){
    this.isNavCollapsed.set(!this.isNavCollapsed());
  }

  newNoteCreated = new EventEmitter<Note>();
  notes: Note[] = [{
    title : "Demo 1",
    body : "Interesting text"
  },{
    title: "nice one",
    body : "Awesome bro"
  }
  ]

  constructor() {
    this.newNoteCreated.subscribe((note)=>{

      this.notes.push(note)
    })
  }
}

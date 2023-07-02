import {Injectable, signal} from '@angular/core';
import {BehaviorSubject, Observable, scan, Subject, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  isNavCollapsed= signal(false);

  toggleNav(){
    this.isNavCollapsed.set(!this.isNavCollapsed());
  }
  constructor() {
  }
}

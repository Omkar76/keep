import { Component } from '@angular/core';
import {Note} from "./note";
import {SharedService} from "./shared.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private sharedService : SharedService) {
  }
  toggleNav(){
   this.sharedService.toggleNav()
  }
}

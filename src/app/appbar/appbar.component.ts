import { Component } from '@angular/core';
import {SharedService} from "../shared.service";

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.css']
})
export class AppbarComponent {
  constructor(private sharedService : SharedService) {
  }

  toggleNav(){
    this.sharedService.toggleNav();
  }
}

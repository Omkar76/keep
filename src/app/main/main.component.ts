import { Component } from '@angular/core';
import {SharedService} from "../shared.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(public sharedService : SharedService) {

  }
}

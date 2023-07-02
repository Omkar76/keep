import {Component, Input} from '@angular/core';
import {SharedService} from "../shared.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  // isCollapsed : boolean
  constructor(public sharedService : SharedService) {
    // this.sharedService
  }

  // isNavCollapsed(){
  //   // return this.sharedService.isNavCollapsed();
  // }
}

import { Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { AppComponent } from "./app.component";
import { RemindersComponent } from "./reminders/reminders.component";
import { LabelsComponent } from "./labels/labels.component";
import { ArchiveComponent } from "./archive/archive.component";
import { BinComponent } from "./bin/bin.component";

export const appRoutes: Routes = [
    { path : '', component: MainComponent },
    { path : 'reminders',  component:  RemindersComponent},
    { path : 'labels', component : LabelsComponent},
    { path : 'archive', component : ArchiveComponent},
    { path : 'bin', component : BinComponent},
    
  ];
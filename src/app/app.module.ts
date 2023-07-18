import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AppbarComponent } from './appbar/appbar.component';
import {LocationStrategy, NgOptimizedImage, PathLocationStrategy} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { NewNoteComponent } from './new-note/new-note.component';
import { MainComponent } from './main/main.component';

import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from "@angular/material/menu";
import {MatBadgeModule} from "@angular/material/badge";
import {NgxPopperjsModule} from "ngx-popperjs";
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { RemindersComponent } from './reminders/reminders.component';
import { LabelsComponent } from './labels/labels.component';
import { ArchiveComponent } from './archive/archive.component';
import { BinComponent } from './bin/bin.component';


@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    SidenavComponent,
    AppbarComponent,
    NewNoteComponent,
    MainComponent,
    RemindersComponent,
    LabelsComponent,
    ArchiveComponent,
    BinComponent,
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    FormsModule,
    HttpClientModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    NgxPopperjsModule,
    RouterModule.forRoot(appRoutes,{
      useHash : true,
      enableTracing : true
    })
  ],
  // providers: [{provide : LocationStrategy, useClass : PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

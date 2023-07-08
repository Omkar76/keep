import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AppbarComponent } from './appbar/appbar.component';
import {NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { NewNoteComponent } from './new-note/new-note.component';
import { MainComponent } from './main/main.component';

import {HttpClient, HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from "@angular/material/menu";
import {MatBadgeModule} from "@angular/material/badge";
import {NgxPopperjsModule} from "ngx-popperjs";


@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    SidenavComponent,
    AppbarComponent,
    NewNoteComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    FormsModule,
    HttpClientModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    NgxPopperjsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

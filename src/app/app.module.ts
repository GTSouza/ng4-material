import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { VirtualScrollModule } from 'angular2-virtual-scroll';

import { AppComponent } from './app.component';
import { FeedListItemComponent } from './feed-list/feed-list-item.component';
import { FeedListComponent } from './feed-list/feed-list.component';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';

@NgModule({
  declarations: [
    AppComponent,
    UserAvatarComponent,
    FeedListItemComponent,
    FeedListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    VirtualScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
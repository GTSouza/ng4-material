import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { VirtualScrollModule } from 'angular2-virtual-scroll';

import { AppComponent } from './app.component';
import { FeedListComponent } from './feed-list/feed-list.component';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';

import { ListItemComponent } from './list-item/list-item.component';
import { ListWithApiComponent } from './list-with-api/list-with-api.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedListComponent,
    UserAvatarComponent,
    ListItemComponent,
    ListWithApiComponent
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
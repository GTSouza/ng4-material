import { ChangeEvent } from 'angular2-virtual-scroll';
import { Component } from '@angular/core';
import { Input } from '@angular/core';

import { FeedListItem } from './feed-list-item.component';

import { OnInit, OnChanges } from '@angular/core';
import { SimpleChanges } from '@angular/core';

import { Http } from '@angular/http';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss']
})
export class FeedListComponent implements OnInit, OnChanges {

  @Input()
  items: FeedListItem[];
  scrollItems: FeedListItem[];

  indices: ChangeEvent;
  buffer: FeedListItem[] = [];
  readonly bufferSize: number = 10;
  timer;
  loading: boolean;

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('assets/data/items.json')
      .map(response => response.json())
      .subscribe(data => this.items = data);
      
      this.reset();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.reset();
  }

  reset() {
    this.fetchNextChunk(0, this.bufferSize, {}).then(chunk => this.buffer = chunk);
  }

  fetchMore(event: ChangeEvent) {
    this.indices = event;
    if (event.end === this.buffer.length) {
      this.loading = true;
      this.fetchNextChunk(this.buffer.length, this.bufferSize, event).then(chunk => {
        this.buffer = this.buffer.concat(chunk);
        this.loading = false;
      }, () => this.loading = false);
    }
  }

  fetchNextChunk(skip: number, limit: number, event?: any): Promise<FeedListItem[]> {
    return new Promise((resolve, reject) => {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        if (skip < this.items.length) {
          return resolve(this.items.slice(skip, skip + limit));
        }
        reject();
      }, 1000 + Math.random() * 1000);
    });
  }
}
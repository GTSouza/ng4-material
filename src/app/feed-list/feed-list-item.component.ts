import { Component, Input } from '@angular/core';

export interface FeedListItem {
    index?: number;
    name?: string;
    gender?: string;
    age?: number;
    email?: string;
    phone?: string;
    address?: string;
}

@Component({
  selector: 'app-feed-list-item',
  templateUrl: './feed-list-item.component.html',
  styleUrls: ['./feed-list-item.component.scss']
})

export class FeedListItemComponent {
    @Input()
    item: FeedListItem;
}
import { Component } from '@angular/core';
import { FeedComponent } from 'src/app/shared/components/feed/feed.component';

@Component({
  selector: 'mc-global-feed',
  standalone: true,
  imports: [FeedComponent],
  templateUrl: './globalFeed.component.html',
})
export class GlobalFeedComponent {
  apiUrl = '/articles';
}

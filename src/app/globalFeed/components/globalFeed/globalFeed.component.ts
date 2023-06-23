import { Component } from '@angular/core';
import { BannerComponent } from 'src/app/shared/components/banner/banner.component';
import { FeedComponent } from 'src/app/shared/components/feed/feed.component';
import { PopularTagsComponent } from 'src/app/shared/components/popularTags/popularTags.component';

@Component({
  selector: 'mc-global-feed',
  standalone: true,
  imports: [FeedComponent, BannerComponent, PopularTagsComponent],
  templateUrl: './globalFeed.component.html',
})
export class GlobalFeedComponent {
  apiUrl = '/articles';
}

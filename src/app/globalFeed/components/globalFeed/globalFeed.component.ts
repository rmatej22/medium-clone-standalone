import { Component } from '@angular/core';
import { BannerComponent } from 'src/app/shared/components/banner/banner.component';
import { FeedComponent } from 'src/app/shared/components/feed/feed.component';
import { FeedTogglerComponent } from 'src/app/shared/components/feedToggler/feedToggler.component';
import { PopularTagsComponent } from 'src/app/shared/components/popularTags/popularTags.component';

@Component({
  selector: 'mc-global-feed',
  standalone: true,
  imports: [
    FeedComponent,
    BannerComponent,
    PopularTagsComponent,
    FeedTogglerComponent,
  ],
  templateUrl: './globalFeed.component.html',
})
export class GlobalFeedComponent {
  apiUrl = '/articles';
}

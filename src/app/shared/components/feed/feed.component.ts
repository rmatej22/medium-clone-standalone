import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { feedActions } from './store/actions';
import { combineLatest } from 'rxjs';
import { selectError, selectFeedData, selectIsLoading } from './store/reducers';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { ErrorMessageComponent } from '../errorMessage/errorMessage.component';
import { LoadingComponent } from '../loading/loading.component';
import { environment } from 'src/environments/environment';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'mc-feed',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ErrorMessageComponent,
    LoadingComponent,
    PaginationComponent,
  ],
  templateUrl: './feed.component.html',
})
export class FeedComponent implements OnInit {
  @Input() apiUrl: string = '';

  data$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
    feed: this.store.select(selectFeedData),
  });

  limit = environment.limit;
  baseUrl = this.router.url.split('?')[0];
  currentPage: number = 0;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.store.dispatch(feedActions.getFeed({ url: this.apiUrl }));

    this.route.queryParams.subscribe((params: Params) => {
      this.currentPage = Number(params['page'] || '1');
    });
  }
}

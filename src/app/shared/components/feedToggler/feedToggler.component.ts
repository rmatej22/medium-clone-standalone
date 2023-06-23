import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from 'src/app/auth/store/reducers';

@Component({
  selector: 'mc-feed-toggler',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './feedToggler.component.html',
})
export class FeedTogglerComponent {
  @Input() tagName?: string;

  currentUser$ = this.store.select(selectCurrentUser);

  constructor(private store: Store) {}
}

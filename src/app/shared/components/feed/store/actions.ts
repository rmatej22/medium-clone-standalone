import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { GetFeedResponseInterface } from '../types/geetFeedResponse.interface';

export const feedActions = createActionGroup({
  source: 'feed',
  events: {
    'Get feed': props<{ url: string }>(),
    'Get feed succes': props<{ feed: GetFeedResponseInterface }>(),
    'Get feed failure': emptyProps(),
  },
});

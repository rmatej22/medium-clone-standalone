import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ArticleInterface } from 'src/app/shared/types/article.interface';

export const articleActions = createActionGroup({
  source: 'article',
  events: {
    'Get article': props<{ slug: string }>(),
    'Get article succes': props<{ article: ArticleInterface }>(),
    'Get article failure': emptyProps(),
  },
});

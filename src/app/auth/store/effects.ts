import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../services/auth.service';
import { authActions } from './actions';
import { switchMap, map, catchError, of } from 'rxjs';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';

export const registerEffect = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(authActions.register),
      switchMap(({ request }) => {
        return authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) =>
            authActions.registerSuccess({ currentUser })
          ),
          catchError((errorResponse) =>
            of(
              authActions.registerFailure({
                errors: errorResponse.error.errors,
              })
            )
          )
        );
      })
    );
  },
  {
    functional: true,
  }
);

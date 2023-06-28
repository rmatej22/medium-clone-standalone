import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../services/auth.service';
import { authActions } from './actions';
import { switchMap, map, catchError, of, tap } from 'rxjs';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

export const getCurrentUserEffect = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService),
    persistanceService = inject(PersistanceService)
  ) => {
    return actions$.pipe(
      ofType(authActions.getCurrentUser),
      switchMap(() => {
        const token = persistanceService.get('accessToken');
        if (!token) {
          return of(authActions.getCurrentUserFailure());
        }
        return authService.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => {
            return authActions.getCurrentUserSuccess({ currentUser });
          }),
          catchError(() => of(authActions.getCurrentUserFailure()))
        );
      })
    );
  },
  {
    functional: true,
  }
);

export const registerEffect = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService),
    persistanceService = inject(PersistanceService)
  ) => {
    return actions$.pipe(
      ofType(authActions.register),
      switchMap(({ request }) => {
        return authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            persistanceService.set('accessToken', currentUser.token);
            return authActions.registerSuccess({ currentUser });
          }),
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

export const redirectAfterRegisterEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(authActions.registerSuccess),
      tap(() => {
        router.navigateByUrl('/');
      })
    );
  },
  {
    functional: true,
    dispatch: false,
  }
);

export const loginEffect = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService),
    persistanceService = inject(PersistanceService)
  ) => {
    return actions$.pipe(
      ofType(authActions.login),
      switchMap(({ request }) => {
        return authService.login(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            persistanceService.set('accessToken', currentUser.token);
            return authActions.loginSuccess({ currentUser });
          }),
          catchError((errorResponse) =>
            of(
              authActions.loginFailure({
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

export const redirectAfterLoginEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(authActions.loginSuccess),
      tap(() => {
        router.navigateByUrl('/');
      })
    );
  },
  {
    functional: true,
    dispatch: false,
  }
);

export const updateCurrentUserEffect = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(authActions.updateCurrentUser),
      switchMap(({ currentUserRequest }) => {
        return authService.updateCurrentUser(currentUserRequest).pipe(
          map((currentUser: CurrentUserInterface) => {
            return authActions.updateCurrentUserSuccess({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              authActions.updateCurrentUserFailure({
                errors: errorResponse.error.errors,
              })
            );
          })
        );
      })
    );
  },
  { functional: true }
);

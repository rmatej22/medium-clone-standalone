import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { authActions } from '../../store/actions';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { RouterLink } from '@angular/router';
import { AuthStateInterface } from '../../types/authState.interface';
import {
  selectIsSubmitting,
  selectValidationErrors,
} from '../../store/reducers';
import { CommonModule } from '@angular/common';
import { combineLatest } from 'rxjs';
import { BackendErrorMessagesComponent } from 'src/app/shared/components/backendErrorMessages/backend-errors-messages.component';
import { LoginRequestInterface } from '../../types/loginRequest.interface';

@Component({
  selector: 'mc-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    CommonModule,
    BackendErrorMessagesComponent,
  ],
  templateUrl: './login.component.html',
  styles: [``],
})
export class LoginComponent {
  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors),
  });

  constructor(
    private fb: FormBuilder,
    private store: Store<{ auth: AuthStateInterface }>
  ) {}

  onSubmit(): void {
    const request: LoginRequestInterface = {
      user: this.form.getRawValue(),
    };
    this.store.dispatch(authActions.login({ request }));
  }
}

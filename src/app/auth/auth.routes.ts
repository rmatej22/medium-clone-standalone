import { Route } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

export const RegisterRoutes: Route[] = [
  {
    path: '',
    component: RegisterComponent,
  },
];

export const LoginRoutes: Route[] = [
  {
    path: '',
    component: LoginComponent,
  },
];

import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register';
import { LoginComponent } from './auth/login/login';

export const routes: Routes = [
  {
    path: "register", component: RegisterComponent,
  },
  {
    path: "login", component: LoginComponent, pathMatch: 'full'
  },
  {
    path: '**', component:LoginComponent,
  }
];

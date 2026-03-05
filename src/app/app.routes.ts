import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register';
import { LoginComponent } from './auth/login/login';
import { DashboardComponent } from './admin/dashboard/dashboard';
import { adminGuard } from './core/guards/admin-guard';
import { MeComponent } from './member/me/me';
import { memberGuard } from './core/guards/member-guard';
import { Books } from './admin/books/books';
import { Users } from './admin/users/users';
import { Borrow } from './member/borrow/borrow';
import { Borrows } from './admin/borrows/borrows';
import { Catalogs } from './member/catalogs/catalogs';
import { Categories } from './admin/categories/categories';

export const routes: Routes = [
  {
    path: "register", component: RegisterComponent,
  },
  {
    path: "login", component: LoginComponent, pathMatch: 'full'
  },


  {
    path: 'admin',

    canActivate: [adminGuard],
    children: [
      {
        path: '', component: DashboardComponent
      },

      {
        path: 'books', component: Books
      },

      {
        path: 'users', component: Users
      },

      {
        path: 'borrows', component: Borrows
      },

      {
        path: 'categories', component: Categories
      }
    ]
  },

  {
    path: 'member',
    component: MeComponent,
    canActivate: [memberGuard],
    children: [
      {
        path: 'me', component: MeComponent,
      },

      {
        path: 'catalogs', component: Catalogs,
      },

      {
        path: 'borrows', component: Borrow
      }
    ]
  },
  // {
  //   path: '**', component: LoginComponent,
  // },
];

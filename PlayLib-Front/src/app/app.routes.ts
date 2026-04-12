import { Routes } from '@angular/router';


export const routes: Routes = [

  { 
    path: 'login', 
    loadComponent: () => import('./components/login/login').then(m => m.Login),
  },

  {
    path: 'register',
    loadComponent: () => import('./components/register/register').then(m => m.Register),
  },

  { 
    path: '',
    loadComponent: () => import('./components/nav-bar/nav-bar').then(m => m.NavBar),
    children: [
      { path: 'home', loadComponent: () => import('./components/home/home').then(m => m.Home) },
      
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'dollar',
    loadComponent: () => import('./dollar/dollar.page').then( m => m.DollarPage)
  },
  {
    path: 'euro',
    loadComponent: () => import('./euro/euro.page').then( m => m.EuroPage)
  },
  {
    path: 'yen',
    loadComponent: () => import('./yen/yen.page').then( m => m.YenPage)
  },
];

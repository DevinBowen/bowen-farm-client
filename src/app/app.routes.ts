import { Routes } from '@angular/router';

import { AuthComponent } from './components/auth/auth.component'
import { HomeComponent } from './components/home/home.component'

export const routes: Routes = [
        { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
        {
            path: 'auth',
            component: AuthComponent,
            children: [
                { path: '', redirectTo: 'login', pathMatch: 'full' },
                {
                    path: 'login',
                    loadComponent: () =>
                    import('./components/auth/login/login.component').then(m => m.LoginComponent)
                },
                {
                    path: 'register',
                    loadComponent: () =>
                    import('./components/auth/register/register.component').then(m => m.RegisterComponent)
                },
                {
                    path: 'logout',
                    loadComponent: () =>
                    import('./components/auth/logout/logout.component').then(m => m.LogoutComponent)
                }
            ]
        },
        { path: 'home', component: HomeComponent },
        { path: '**', redirectTo: '' }
    ]
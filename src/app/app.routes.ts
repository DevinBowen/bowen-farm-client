import { Routes } from '@angular/router';

import { AuthComponent } from './components/auth/auth.component'
import { HomeComponent } from './components/home/home.component'

export const routes: Routes = [
        { path: '', component: HomeComponent },
        {
            path: 'auth',
            component: AuthComponent,
            children: [
                { path: 'login', component: AuthComponent }
            ]
        },
        { path: 'home', component: HomeComponent },
        { path: '**', redirectTo: '' }
    ];

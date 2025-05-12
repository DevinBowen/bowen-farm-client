import { Routes } from '@angular/router';

import { AuthComponent } from './components/auth/auth.component'
import { HomeComponent } from './components/home/home.component'
import { AdminComponent } from './components/admin/admin.component';

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
                    path: 'logout', redirectTo: 'login', pathMatch: 'full'
                    // loadComponent: () =>
                    // import('./components/auth/logout/logout.component').then(m => m.LogoutComponent)
                }
            ]
        },
        {
            path: 'home',
            component: HomeComponent,
            children: [
                { path: '', redirectTo: 'about', pathMatch: 'full' },
                {
                    path: 'about',
                    loadComponent: () =>
                    import('./components/home/about/about.component').then(m => m.AboutComponent)
                },
                {
                    path: 'store',
                    loadComponent: () =>
                    import('./components/home/store/store.component').then(m => m.StoreComponent)
                },
                {
                    path: 'cart',
                    loadComponent: () =>
                    import('./components/home/cart/cart.component').then(m => m.CartComponent)
                },
                {
                    path: 'checkout',
                    loadComponent: () =>
                    import('./components/home/checkout/checkout.component').then(m => m.CheckoutComponent)
                },
                {
                    path: 'contact',
                    loadComponent: () =>
                    import('./components/home/contact/contact.component').then(m => m.ContactComponent)
                }
            ]
        },
        { path: 'admin', component: AdminComponent },
        { path: '**', redirectTo: 'auth/login' }
    ]
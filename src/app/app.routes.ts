import { Routes } from '@angular/router';
import { About } from './page/about/about';
import { Contact } from './page/contact/contact';
import { Home } from './page/home/home';

export const routes: Routes = [
    {
        path: '', component: Home
    },
    {
        path: 'about', component: About
    },
    {
        path: 'contact', component: Contact
    }
];

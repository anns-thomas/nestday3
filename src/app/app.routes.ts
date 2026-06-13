import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Component } from '@angular/core';
import { Products } from './pages/products/products';
import { Productdetails } from './pages/productdetails/productdetails';

export const routes: Routes = [
   {
        path: '', component: Home
    },
    {
        path: 'about', component: About
    },
    {
        path: 'contact', component: Contact
    },
    {
        path: 'products', component: Products
    },
    {
        path: 'productdetails/:id', component: Productdetails
    },
     

];

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AboutComponent} from '../components/about/about.component';
import {ContactComponent} from '../components/contact/contact.component';
import {HomeComponent} from '../components/home/home.component';
import {ErrorComponent} from '../components/error/error.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent, data: { title: 'Heroes List' } },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: ErrorComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
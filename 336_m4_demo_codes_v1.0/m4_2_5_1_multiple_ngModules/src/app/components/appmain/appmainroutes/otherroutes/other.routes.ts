import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AboutComponent} from '../../about/about.component';
import {ContactComponent} from '../../contact/contact.component';

export const otherRoutes: Routes = [
    { path: 'about/:id', component: AboutComponent, data: { title: 'Heroes List' } },
    { path: 'contact', component: ContactComponent }
];

export const otherRoutingProviders: any[] = [
    
];

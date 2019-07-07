import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AboutComponent} from '../components/about/about.component';
import {ContactComponent} from '../components/contact/contact.component';
import {HomeComponent} from '../components/home/home.component';
import {ErrorComponent} from '../components/error/error.component';
import {TeamComponent} from '../components/team/team.component';
import {TeamHomeComponent} from '../components/team/home/team.home.component';
import {TeamItemComponent} from '../components/team/item/team.item.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about/:id', component: AboutComponent, data: { title: 'Heroes List' } },
    { path: 'contact', component: ContactComponent },
    {
        path: 'team',
        component: TeamComponent,
        children: [
          { path: '', component: TeamComponent },
          { path: 'test', component: TeamHomeComponent },
          { path: 'item', component: TeamItemComponent }
        ]
    },
    { path: '**', component: ErrorComponent }
    // { path: '**', redirectTo: '', pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
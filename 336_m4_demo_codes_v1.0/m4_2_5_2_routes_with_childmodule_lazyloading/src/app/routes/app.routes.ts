import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ErrorComponent} from '../components/error/error.component';

const appRoutes: Routes = [
    // Defining a Lazy module for routes. 
    // Notice the loadChildren with the path of the team module with name after #
    { path: 'team', loadChildren: 'app/components/team/team.module#TeamModule' },
    { path: '**', component: ErrorComponent }
    // { path: '**', redirectTo: '', pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
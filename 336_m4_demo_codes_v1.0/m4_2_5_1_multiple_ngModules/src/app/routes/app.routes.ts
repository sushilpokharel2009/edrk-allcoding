import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ErrorComponent} from '../components/error/error.component';

const appRoutes: Routes = [
    { path: '**', component: ErrorComponent }
    // { path: '**', redirectTo: '', pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
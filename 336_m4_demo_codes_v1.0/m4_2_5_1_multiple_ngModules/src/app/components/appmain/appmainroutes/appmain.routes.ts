import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {otherRoutingProviders, otherRoutes} from './otherroutes/other.routes';
import {HomeComponent} from '../home/home.component';

const appmainRoutes: Routes = [
    { path: '', component: HomeComponent },
    ...otherRoutes
];

export const appmainRoutingProviders: any[] = [
    otherRoutingProviders
];

export const appmainRouting: ModuleWithProviders = RouterModule.forRoot(appmainRoutes);
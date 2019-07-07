import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TeamComponent} from '../team/team.component';
import {TeamHomeComponent} from '../home/team.home.component';
import {TeamItemComponent} from '../item/team.item.component';

export const teamRoutes: Routes = [
    
    {
        path: 'team',
        component: TeamComponent,
        children: [
          { path: '', component: TeamComponent },
          { path: 'test', component: TeamHomeComponent },
          { path: 'item', component: TeamItemComponent }
        ]
    }
];

export const teamRoutingProviders: any[] = [

];

export const teamRouting: ModuleWithProviders = RouterModule.forChild(teamRoutes);
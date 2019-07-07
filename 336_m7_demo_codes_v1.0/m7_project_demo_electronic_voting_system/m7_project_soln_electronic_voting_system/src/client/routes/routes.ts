import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from '../components/home/home';
import {LoginComponent} from '../components/login/login';
import {RegisterComponent} from '../components/register/register';
import {UsersComponent} from '../components/users/users';
import {VoteComponent} from '../components/vote/vote';
import {GetapprovalComponent} from '../components/getapproval/getapproval';
import {ResultsComponent} from '../components/results/results';
import {AdminComponent} from '../components/admin/admin';
import {ApproveComponent} from '../components/approve/approve';
import {CandidatesComponent} from '../components/candidates/candidates';
import {AddcandidateComponent} from '../components/addcandidate/addcandidate';
import {ErrorComponent} from '../components/error/error';

const appRoutes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'home', component: HomeComponent },
    {path: 'login', component: LoginComponent },
    {path: 'register', component: RegisterComponent },
    {path: 'users',component: UsersComponent, children:[
        {path:'', component: VoteComponent},
        {path: 'vote', component: VoteComponent },
        {path: 'getapproval', component: GetapprovalComponent },
        {path: 'userresults', component: ResultsComponent }
    ] },
    {path: 'admin', component: AdminComponent, children:[
        {path:'',component: ApproveComponent},
        {path: 'approve', component: ApproveComponent },
        {path: 'candidates', component: CandidatesComponent },
        {path: 'addcandidate', component: AddcandidateComponent },
        {path: 'adminresults', component: ResultsComponent }
    ] },
    {path:"**",component:ErrorComponent}
]

export const appRouterProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
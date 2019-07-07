import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {MainComponent} from '../client/components/main/main';
import {Userdetails} from '../client/services/userdetails';
import {Httpprovider} from '../client/services/httpprovider';
import {routing, appRouterProviders} from '../client/routes/routes';
import {HomeComponent} from './components/home/home';
import {LoginComponent} from './components/login/login';
import {RegisterComponent} from './components/register/register';
import {UsersComponent} from './components/users/users';
import {VoteComponent} from './components/vote/vote';
import {GetapprovalComponent} from './components/getapproval/getapproval';
import {ResultsComponent} from './components/results/results';
import {AdminComponent} from './components/admin/admin';
import {ApproveComponent} from './components/approve/approve';
import {CandidatesComponent} from './components/candidates/candidates';
import {AddcandidateComponent} from './components/addcandidate/addcandidate';
import {ErrorComponent} from './components/error/error';

@NgModule({
    imports:[BrowserModule, routing,FormsModule, CommonModule,HttpModule,],
    declarations:[
        MainComponent,
        HomeComponent, LoginComponent,RegisterComponent,UsersComponent,
        VoteComponent,GetapprovalComponent,ResultsComponent,AdminComponent,
        ApproveComponent,CandidatesComponent,ErrorComponent,AddcandidateComponent
    ],
    providers:[appRouterProviders, Userdetails,  Httpprovider],
    bootstrap:[MainComponent]
})
export class AppModule{
}
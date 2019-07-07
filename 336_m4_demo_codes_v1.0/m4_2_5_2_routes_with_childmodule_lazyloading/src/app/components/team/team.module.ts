import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import {TeamComponent} from './team/team.component';
import {TeamHomeComponent} from './home/team.home.component';
import {TeamItemComponent} from './item/team.item.component';

import { TeamRoutingModule, teamRoutingProviders } from './teamroutes/team.routes';
@NgModule({
  imports:      [ BrowserModule, CommonModule, FormsModule, TeamRoutingModule ],
  declarations: [ TeamComponent, TeamHomeComponent, TeamItemComponent ],
  providers: [teamRoutingProviders],
  exports:[],
})
export class TeamModule { }
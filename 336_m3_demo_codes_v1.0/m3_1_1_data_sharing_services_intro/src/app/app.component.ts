/* Importing ngOnInit from Angular Core */
import {Component, OnInit} from '@angular/core';
import {Developer} from './dev';
/* Importing DevService */
import {DevService} from './dev.service';

/* Adding DevService as a provider for the Component */
 
@Component({
  selector: 'my-app',
  template:`
    <h2>Edureka Components - Services Introduction</h2>
    <h3>{{title}}</h3>
    <ul class="dev">
         
      <li *ngFor="let developer of developers"
        [class.selected]="developer === selectedDeveloper"
        (click)="onSelect(developer)">
        <span class="spanbackground">{{developer.name}}</span> -  {{developer.skill}}
      </li>
    </ul>
    <!-- 
        Converted below section to a directive and imported as dependancy module. 
        Required variable of selected developer passed as attribute value 
    -->
    <dev-details [selectedDeveloper]="selectedDeveloper"></dev-details>
  `,
  styles:[`
    .selected {
      background-color: #ccc !important;
      color: white;
    }
    .dev{
        width: 150px;
    }
    .dev .spanbackground{
        width: 50px;
    }
  `]
})

  /* Converting the developer into array of type Developer */
  /* Defining Internal function to get developers list from model-developers */
  /* The service can have values, objects, and numbers as well like any JS Variable */  
export class AppComponent implements OnInit {
  constructor(private _DevService: DevService) { }
  public title = 'Developers List';
  public developers : Developer[];
  public selectedDeveloper: Developer;
  public onSelect(developer: Developer) { this.selectedDeveloper = developer; }

  getDevelopers(){
      this._DevService.getDevelopers().then(developers => this.developers = developers)
  }
  ngOnInit(){
      this.getDevelopers();
  }
}

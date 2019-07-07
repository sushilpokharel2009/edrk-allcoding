/* Import the Component Dependency from Angular Core */
import {Component} from '@angular/core';

/* Interface is for the developer object to ensure types */
/* Interface can replace TS Classes if you want no footprint in JS for the object */

interface Developer {
  name: number;
  skill: string;
}

/* Components annotation declare metadata for the components */
/* Components are Directives with functionality and view */
/* Template or TemplateUrl provide the views or template for the component */
/* Styles are isolated to Components and can be used without leaking outside the template */

@Component({
  selector: 'my-app',
  template:`
    <h3>{{title}}</h3>
    <ul class="dev">
    
    <!-- *ngFor will repeat the developers similar to ngRepeat of v1.x -->    
    <!-- [] provides data binding -->
    <!-- () provides event binding for model function onSelect in class. Restricted to component and does not bubble -->   
     
      <li *ngFor="let developer of developers"
        [class.selected]="developer === selectedDeveloper"
        (click)="onSelect(developer)">
        <span class="spanbackground">{{developer.name}}</span> -  {{developer.skill}}
      </li>
    </ul>
    
    <!-- *ngIf Below will be printed only if above developer is selected -->
    
    <div *ngIf="selectedDeveloper">
      <h2>{{selectedDeveloper.skill}} Profile</h2>
      <div><label>id: </label>{{selectedDeveloper.name}}</div>
      <div>
        <label>Skill: </label>
        
    <!-- [()] provides two way binding -->  

        <input [(ngModel)]="selectedDeveloper.skill" [ngModelOptions]="{standalone:true}" placeholder="skill"/>
      </div>
    </div>
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

/* Root Components functionality - Controller */
/* Exporting the class from the module to be used elsewhere using import */

export class AppComponent {
  public title: string = 'Developers List';
  public developers: any = DEVELOPERS;
  public selectedDeveloper: Developer;
  public onSelect(developer: Developer) { this.selectedDeveloper = developer; }
}

/* Developer is the type of Array which is hard coded within the component module to be used  */

var DEVELOPERS: Developer[] = [
  { "name": 11, "skill": "Java Dev" },
  { "name": 12, "skill": "C++ Dev" },
  { "name": 13, "skill": "Python Dev" },
  { "name": 14, "skill": "NodeJS Dev" }
];
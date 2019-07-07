import {Component} from '@angular/core';
import {Developer} from './dev';

/* Selected Developer is added to Component Decorator as input dependancy for component */

@Component({
  selector: 'dev-details',
  template: `
    <!-- *ngIf will remove the template if Selected Developer is blank  -->
    <div *ngIf="selectedDeveloper">
      <h2>{{selectedDeveloper.skill}} Profile</h2>
      <div><label>id: </label>{{selectedDeveloper.name}}</div>
      <div>
        <label>Skill: </label>
        <input [(ngModel)]="selectedDeveloper.skill" [ngModelOptions]="{standalone:true}" placeholder="skill"/>
      </div>
    </div>    
  `, 
  inputs: ['selectedDeveloper']
})
export class DevDetailsComponent {
  public developer: Developer;
}
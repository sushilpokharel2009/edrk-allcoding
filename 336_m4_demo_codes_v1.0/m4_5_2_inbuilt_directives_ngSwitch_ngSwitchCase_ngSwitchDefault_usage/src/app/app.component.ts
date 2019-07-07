import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Edureka - ngSwitch, ngSwitchCase, ngSwitchDefault, and ngContainer</h1>
  <div [ngSwitch]="switch_expression">
  <div *ngSwitchCase="match_expression_1">This from switch directive {{match_expression_1}}</div>
  <div *ngSwitchCase="match_expression_2">This from switch directive {{match_expression_2}}</div>
  <div *ngSwitchCase="match_expression_3">This from switch directive {{match_expression_3}}</div>
  <!-- use a ng-container to group multiple root nodes -->
  <!-- 
  <ng-container *ngSwitchCase="match_expression_3">
    
    <inner-element></inner-element>
    <inner-other-element></inner-other-element>
  </ng-container> 
  -->
  Complex ng-container used instead of < template > tags {{match_expression_3}}
  <div *ngSwitchDefault>This from switch directive - Default</div>
</div>
  `,
})
export class AppComponent  {
  switch_expression: string = "angular";
  match_expression_1: string  = "edureka";
  match_expression_2: string = "training";
  match_expression_3: string = "angular";
 }

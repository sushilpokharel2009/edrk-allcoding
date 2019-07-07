import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1  class="red">Hello {{name}}</h1>
  <child-cmp></child-cmp>
  `,
  encapsulation: ViewEncapsulation.None,
  styles:[`
  .red{
    color: red
  }
  `]
})
export class AppComponent  { name = 'Angular'; }

@Component({
  selector: 'child-cmp',
  template: `
    <h1 class="red">ChildCmp - Hello {{name}}</h1>
    <grandchild-cmp></grandchild-cmp>
    <greatgrandchild-cmp></greatgrandchild-cmp>
  `,
  encapsulation: ViewEncapsulation.None
})
export class ChildCmp  { name = 'Angular'; }

@Component({
  selector: 'grandchild-cmp',
  template: `
    <h1 class="red">GrandchildCmp Hello {{name}}</h1>
  `,
  encapsulation: ViewEncapsulation.Emulated
})
export class GrandchildCmp  { name = 'Angular'; }

@Component({
  selector: 'greatgrandchild-cmp',
  template: `
  <h1  class="red">GreatgrandchildCmp Hello {{name}}</h1>
  `,
  encapsulation: ViewEncapsulation.Native
})
export class GreatgrandchildCmp  { name = 'Angular'; }

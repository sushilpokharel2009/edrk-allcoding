import {Component, Optional, Host} from '@angular/core';

export class OtherService {}
export class HostService {}
@Component({
  selector: 'child-component',
  template: `
  <h3>Child Component</h3>
  <h4>OtherService{{logs[0]}}</h4>
  <h4>HostService{{logs[1]}}</h4>
  `
})
export class ChildComponent {
  logs: string[] = [];
    // @Host will fetch from the component tree
    // @Optional means even it is not resolved the application will not break
  constructor(@Optional() @Host() os: OtherService, @Optional() @Host() hs: HostService) {

    // os is null: true
    this.logs.push(` os is null: ${os === null}`);

    // hs is an instance of HostService: true
    this.logs.push(` hs is an instance of HostService: ${hs instanceof HostService}`);
    console.log(this.logs);
  }
}
@Component({
  selector: 'parent-cmp',
  viewProviders: [HostService],
  template: `
  <h3>Parent Component</h3>
  <child-component></child-component>
  `,
})
export class ParentComponent {
}
@Component({
  selector: 'my-app',
  viewProviders: [OtherService],
  template: `
  <h3>Grand Parent Root Cmp</h3>
  <parent-cmp></parent-cmp>
  `,
})
export class AppComponent {
}
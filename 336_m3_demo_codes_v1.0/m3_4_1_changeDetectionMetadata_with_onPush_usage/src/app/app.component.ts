// DEMO CODE - Stackoverflow
import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'loading',
  template: '{{loadingMessage}}',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingComponent {
  @Input('status') loadingMessage: string;

  constructor() {

    // change this from component after 5 seconds
    // test this with commenting changeDetection
    setTimeout(() => {
      this.loadingMessage = "test";
    }, 5000);
  }
}

@Component({
  selector: 'my-app',
  template: `Are we loading?: <loading [status]="loadingMessage"></loading>`,

  // Obviously "Default" will notice the change in `loadingMessage`...
  // changeDetection: ChangeDetectionStrategy.Default

  // But what is best practice when using OnPush?
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  private loadingMessage = "Loading Please wait... ";

  constructor() { }
  ngOnInit() {
    // Pretend we're loading data from a service.
    // This component is only interested in the call's success
    Observable.of(true)
      .delay(2000)
      .subscribe(success => {
        if (success) {
          console.log('Pretend loading: success!');
          this.loadingMessage = 'Success!';
        }
      });
  }
}

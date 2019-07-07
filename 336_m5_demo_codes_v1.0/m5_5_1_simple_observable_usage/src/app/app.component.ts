import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'my-app',
  template: `
  <b>Using Observables!</b>

      <h6 style="margin-bottom: 0">VALUES:</h6>
      <div *ngFor="let value of values">- {{ value }}</div>

      <h6 style="margin-bottom: 0">ERRORs:</h6>
      <div>Errors: {{anyErrors}}</div>

      <h6 style="margin-bottom: 0">FINISHED:</h6>
      <div>Finished: {{ finished }}</div>

      <button style="margin-top: 2rem;" (click)="init()">Init</button>

      <br>
      <button style="margin-top: 2rem;" (click)="unsubscribe()">Unsubscribe Observable</button>
  `,
})
export class AppComponent implements OnInit  {
    // Create an observable
  private data: Observable<Array<number>> = new Observable((observer: any) => {
          setTimeout(() => {
              observer.next(42);
          }, 1000);
          this.status = 'Started Observable';
          this.timeout = setTimeout(() => {
              observer.next(43);
          }, 2000);
          setTimeout(() => {
                observer.error(new Error('Something bad happened!'));
            }, 6000);
          setTimeout(() => {
              observer.next(44);
          }, 4000);
          setTimeout(() => {
              observer.complete();
          }, 8000);
      });
  private values: number[] = [];
  private anyErrors: any;
  subscription: any;
  status: string;
  timeout: any;

  constructor() {
  }

  unsubscribe() {
      // Click Init button and within the init 
      // finishes its function click the Unsubscribe Observable button
      // Notice that it does not trigger the pending actions of the observable you created.
      this.subscription.unsubscribe();
      // Alternatively you can clear out the timeout object
      clearTimeout(this.timeout);
  }
  init() {
    this.subscription = this.data.subscribe(
          (value: any) => {
            this.values.push(value);
          },
          (error: any) => {
            this.anyErrors = error;
          },
          () => this.status = 'Finished unsubscribing'
      );
  }
  ngOnInit() {}
 }

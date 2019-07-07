import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Scroller and Sort Demo</h1>
  <sort-demo></sort-demo>
  <h3>Scroller installed using npm install. Check package.json</h3>
  <div class="search-results"
         infinite-scroll
         [infiniteScrollDistance]="scrollDistance"
         [infiniteScrollUpDistance]="1.5" 
         [infiniteScrollThrottle]="throttle" 
         (scrolled)="onScrollDown()" 
         (scrolledUp)="onScrollUp()">
      <p *ngFor="let i of array">
        {{ i }}
      </p>
    </div>
  <br>
  `,
  styles: [`
    .search-results {
      height: 50%;
      // overflow: scroll;
    }
    .title {
      position: fixed;
      top: 0;
      left: 0;
      background-color: rgba(0,0,0,.5);
      color: white;
      width: 100%;
    }
    .title small {
      color: #eaeaea;
    }
  `]
})
export class AppComponent  { 
  array: any[] = [];
  sum = 100;
  throttle = 300;
  scrollDistance = 1;

  constructor() {
    this.addItems(0, this.sum);
  }

  addItems(startIndex: any, endIndex: any) {
    for (let i = 0; i < this.sum; ++i) {
      this.array.push([i, ' ', this.generateWord()].join(''));
    }
  }
  onScrollDown () {
    console.log('scrolled!!');
    // add another 20 items
    const start = this.sum;
    this.sum += 20;
    this.addItems(start, this.sum);
  }

  generateWord() {
    return this.sum;
  }
  onScrollUp () {
      console.log('scrolled up!!');
  }
 }

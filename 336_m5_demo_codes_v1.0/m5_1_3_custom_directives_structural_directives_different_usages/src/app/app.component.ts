import { Component, Directive, Input, ElementRef, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[nonStrRemoveElOrInnerHTML]' })
export class NonStrRemoveElOrInnerHTML {
  constructor(
    private elementRef: ElementRef
    ) {
      console.log('NonStrRemoveElOrInnerHTML ElementRef: ', this.elementRef);
      console.log('NonStrRemoveElOrInnerHTML ElementRef.nativeElement: ', this.elementRef.nativeElement);
    }

  // Setter for the @Input() for directives
  @Input() set nonStrRemoveElOrInnerHTML(shouldAdd: boolean) {
    if (shouldAdd) {
      // If condition is true add template to DOM
      this.elementRef.nativeElement.style.display = 'block';
    } else {
     // Else remove innerHTML from DOM
      this.elementRef.nativeElement.style.display = 'none';
    }
  }
}

@Directive({ selector: '[strRemoveElOrInnerHTML]' })
export class StrRemoveElOrInnerHTMLDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
    ) {
      console.log('StrRemoveElOrInnerHTMLDirective TemplateRef: ', this.templateRef);
      console.log('StrRemoveElOrInnerHTMLDirective ViewContainerRef: ', this.viewContainer);
    }

  // Setter for the @Input() for directives
  @Input() set strRemoveElOrInnerHTML(shouldAdd: boolean) {
    if (shouldAdd) {
      // If condition is true add template to DOM
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
     // Else remove template from DOM
      this.viewContainer.clear();
    }
  }
}

@Component({
  selector: 'my-app',
  template: `
  <h1>Structural Directive Example</h1>
  <h3>Simple strRemoveElOrInnerHTML Directive - check console and DOM Elements tab in dev tools</h3>
  <br>
  <!-- 
    Structural Directive 
    No * gives access to element reference hence ElementRef usage
  -->
  <div nonStrRemoveElOrInnerHTML="true">
      <span>Inside first structural nonStrRemoveElOrInnerHTML (no * usage) Directive - True</span>
  </div>
  <div nonStrRemoveElOrInnerHTML="true">
      <span>Inside second structural nonStrRemoveElOrInnerHTML (no * usage) Directive - True</span>
  </div>

  <!-- 
      Structural Directive
      * in *strRemoveElOrInnerHTML will convert the contents <span> 
      of the hosting <div> into 
      <template strRemoveElOrInnerHTML="">...<span>...xxx...</span>...</template>
      Hence, you injected templateRef else there will be errors related to TemplateRef
  -->
  <div *strRemoveElOrInnerHTML="true">
      <span>Inside first structural strRemoveElOrInnerHTML Directive  (* usage) - True</span>
  </div>
  <div *strRemoveElOrInnerHTML="false">
      <span>Inside second structural strRemoveElOrInnerHTML Directive  (* usage) - False</span>
  </div>
  <br>
  <h3>Demo for *'s template conversion</h3>
  <!-- Examples (A) and (B) are the same -->
  <!-- (A) *ng-if paragraph -->
  <p *ngIf="templateDemo">
    Our No < template > *ngIf content!
  </p>
  
  <!-- (B) [ng-if] with template -->
  <ng-template [ngIf]="templateDemo">
    <p>
      Our < template > [ngIf] content!
    </p>
  </ng-template>
  `
})
export class AppComponent  {
  templateDemo: boolean = true;
  constructor() {}
 }


import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface User {
  name: string;
  account: {
    email: string;
    confirm: string;
  }
}

@Component({
  selector: 'my-app',
  template: `
  <h1>Angular2 FormGroup and FormControl - Edureka</h1>
  <h3>Demostrates use of FormControl, FormGroup, formControlName, formGroupName, and Validators</h3>
  <register-form></register-form>
  `,
})
export class AppComponent  { }

/* 
 * Check the usage of [formGroup] , formGroupName , and formControlName for each forms
 * Check the usage of user.get('nameOfTheControl')
 * Check the usage of user.controls.nameOfTheControl 
 * Check the usage of json pipe
 * Check the capture of user.invalid or user.valid usage for checking form validity
*/

@Component({
  selector: 'register-form',
  template: `
  <form novalidate (ngSubmit)="onSubmit(user)" [formGroup]="user">

      <label>
        <span>Full name</span>
        <input
          type="text"
          formControlName="name"
          placeholder="full name">
          <br>
          <!-- “Safe navigation operator” below -->  
          Error Validator:  {{ user.controls.name?.errors | json }}

          <!-- Usage of safe navigation errors -->
          <div
            class="error"
            *ngIf="user.get('name').hasError('required') && user.get('name').touched">
            Name is required
          </div>
          <div
            class="error"
            *ngIf="user.get('name').hasError('minlength') && user.get('name').touched">
            Minimum of 2 characters
          </div>
      </label>
      <div formGroupName="account">
        <label>
          <span>Email address</span>
          <input
            type="email"
            formControlName="email"
            placeholder="email">
            <br>
            <!-- Usage of safe navigation errors -->
          <div
            class="error"
            *ngIf="user.get('account').get('email').hasError('required') && user.get('account').get('email').touched">
            Email is required
          </div>
        </label>
        <label>
          <span>Confirm address</span>
          <input
            type="email"
            formControlName="confirm"
            placeholder="Confirm email">
            <br>
          <div
            class="error"
            *ngIf="user.get('account').get('confirm').hasError('required') && user.get('account').get('confirm').touched">
            Confirming email is required
          </div>
        </label>
      </div>
      <button type="submit" [disabled]="user.invalid">Sign up</button>

  </form>
  <br><br>
  {{ user.value | json }}

  `,
})
export class RegisterFormComponent {
  user: FormGroup;

  ngOnInit() {
    /*
     * Create a FormGroup which is group of controls
     * Create FormControl within the FormGroup
     * Validators cn be specifed as an array or single validator
    */
    this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      account: new FormGroup({
        email: new FormControl('', [Validators.required]),
        confirm: new FormControl('', Validators.required)
      })
    });
  }
  onSubmit({ value, valid }: { value: User, valid: boolean }){
    console.log('user.value: ', value, ' user.valid: ');
  }
 }


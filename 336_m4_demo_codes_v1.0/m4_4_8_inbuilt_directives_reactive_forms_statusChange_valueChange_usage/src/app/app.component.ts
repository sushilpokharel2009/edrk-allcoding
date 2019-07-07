import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
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
      <br>
      <button type="button" (click)="onClick()">Apply Stored Values</button>
      <br>
      <button type="button" (click)="onReset()">Reset Form</button>
  </form>
  <br>
  
  <br>
  {{ user.value | json }}

  `,
})
export class RegisterFormComponent {
  user: FormGroup;

  ngOnInit() {
    this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      account: new FormGroup({
        email: new FormControl('', [Validators.required]),
        confirm: new FormControl('', Validators.required)
      })
    });

  /*
  * Usage of statusChange and valueChange
  * Works for both FormGroup and FormBuilder
  * Subscribe the observable for event change
  */
    this.user.valueChanges
        .map((value) => {
            value.name = value.name.toUpperCase();
            return value;
        })
        .filter((value) => this.user.valid)
        .subscribe((value) => {
           console.log('Value Change Model Driven Form valid value: vm = ', JSON.stringify(value));
        });

      this.user.statusChanges
        .filter((value) => {
          // pristine, valid, invalid
          return value.toLowerCase() === 'invalid';
        })
        .subscribe((value) => {
           console.log('Status Change Model Driven Form invalid value: vm = ', JSON.stringify(value));
        });
  }
  onSubmit({ value, valid }: { value: User, valid: boolean }){
    console.log('user.value: ', value, ' user.valid: ', valid);
  }

  onClick() {
    this.user.patchValue({
        name: 'Edureka Angular Training',
        account: {
          email: 'Edureka Bootcamp',
          confirm: 'Bangalore'
        }
      });
      console.log(this.user.value);
  }

  onReset() {
    
    /* 
     * Usage of reset() of form works for FormGroup and FormBuilder 
     * 
     * */
    this.user.reset();
  }

 }

import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

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
  <h1>Angular2 FormBuilder - Edureka</h1>
  <h3>Demostrates use of FormBuilder and Validators</h3>
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
      <br>Check console after hitting submit
      <br>
      <button type="button" (click)="onClick()">Apply Stored Values</button>
  </form>
  <br><br>
  {{ user.value | json }}

  `,
})
export class RegisterFormComponent {
  user: FormGroup;
  constructor(private fb: FormBuilder) {}
  /*
   * Just replace FormGroup with FormBuilder injected and remove FormControl
   * Validations for both FormBuilder and FormGoup remains the same
   * See the change in definition of groups and 
   * See the change in definition of using formcontrol and its Validators (array) which is now defined as an array
  */
  ngOnInit() {
    this.user = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(2)]],
        account: this.fb.group({
          email: ['', Validators.required],
          confirm: ['', Validators.required]
        })
      });
  }
  onSubmit({ value, valid }: { value: User, valid: boolean }){
    console.log('user.value: ', value, ' user.valid: ', valid);
    //user.controls.account.controls.email.valid
  }
  /*
  * Usage of setValue
  * setValue will apply the value to the FormGroup's FormControls
  * If any one item is extra or not matching then it will not apply the key AND WILL throw errors
          setValue(value: any, {onlySelf, emitEvent, emitModelToViewChange, emitViewToModelChange}: {
                                  onlySelf?: boolean,
                                  emitEvent?: boolean,
                                  emitModelToViewChange?: boolean,
                                  emitViewToModelChange?: boolean
                                } = {}): void 
            {
              this._value = value;
              if (this._onChange.length && emitModelToViewChange !== false) {
                this._onChange.forEach((changeFn) => changeFn(this._value, emitViewToModelChange !== false));
              }
              this.updateValueAndValidity({onlySelf, emitEvent});
            }
  */

  onClick(){
    /*
     * this.formname.controls['account'].setValue(formname.account, { onlySelf: true });
    */
    this.user.setValue({
        name: 'Edureka Angular Training',
        account: {
          email: 'Edureka Bootcamp',
          confirm: 'Bangalore'
        }
      });
      console.log(this.user.value);
      /*
      * The following will not apply AND WILL throw error for object key testErrorValue
          this.user.setValue({
            testErrorValue:'Will throw error',
            name: 'Edureka Angular Training',
            account: {
              email: 'Edureka Bootcamp',
              confirm: 'Bangalore'
            }
          });
      */
  }
 }

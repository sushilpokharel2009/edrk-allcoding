import { Component } from '@angular/core';

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
  <h1>Angular2 Simple Forms using a #localvariable with the form tag - Edureka</h1>
  <h3>Demostrates use of #localvariable and ngSubmit</h3>
  <register-form></register-form>
  `,
})
export class AppComponent  { }

@Component({
  selector: 'register-form',
  template: `
  <form #user (ngSubmit)="onSubmit(user)">
      <label>
        <span>Full name</span>
        <input
          type="text"
          name="name"
          placeholder="full name">
          <br>
      </label>
      <div>
        <label>
          <span>Email address</span>
          <input
            type="email"
            name="email"
            placeholder="email">
            <br>
        </label>
        <label>
          <span>Confirm address</span>
          <input
            type="email"
            name="confirm"
            placeholder="Confirm email">
            <br>
        </label>
      </div>
      <button type="submit" name="submit">Sign up</button>

  </form>


  `,
})
export class RegisterFormComponent {

  ngOnInit() {
    
  }
  onSubmit(user: any){
    console.log(user.name.value, user.email.value, user.confirm.value);
  }
 }

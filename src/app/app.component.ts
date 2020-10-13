import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  isLoginForm = false;
  isRegisterForm = false;
  
  public openLoginForm() {
    this.isLoginForm = !this.isLoginForm;
    this.isRegisterForm = false;
  }

  public openRegisterForm() {
    this.isRegisterForm = !this.isRegisterForm;
    this.isLoginForm = false;
  }
}

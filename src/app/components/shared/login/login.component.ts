import { LoginService } from '../../../services/login.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  messageError: string = this.loginService.invalidMessage;
  token: string = '';
  constructor(private loginService: LoginService) {}
  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9.]{6,}$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\w{8,}$/),
    ]),
  });
  // Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/),

  public get username() {
    return this.loginForm.controls.username;
  }
  public get password() {
    return this.loginForm.controls.password;
  }
  login() {
    if (this.loginForm.status === 'VALID')
      this.loginService.login(this.loginForm.value);
    // .subscribe({
    //   next: (response) => {

    //   },
    //   error: (error) => {
    //     this.messageError = 'Invalid username or password. Please try again.';
    //   },
    // });
  }
}
// 1|QWS9ibsFiaI58wBGzDwjZzUboF4exunRksGeyDyO admin

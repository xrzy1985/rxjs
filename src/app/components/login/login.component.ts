import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';
import { environment } from '../../../environments/environment';
import { ErrorHandler } from '../../classes/error-handler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends ErrorHandler {
  constructor(private loginService: LoginService) {
    super();
  }

  protected email = new FormControl('', [Validators.required, Validators.email]);
  protected password = new FormControl('', [Validators.required]);

  protected login(): void {
    // replace with auth and api call to firebase
    if (
      environment.auth.email === this.email.value &&
      environment.auth.password === this.loginService.encrypted(this.password.value ?? '') &&
      !this.email.errors &&
      !this.password.errors
    ) {
      this.loginService.setLoggedInStatus(true);
    }
  }
}

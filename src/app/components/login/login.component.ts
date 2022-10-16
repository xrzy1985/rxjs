import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';
import { constants } from '../../constants/constants';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  ngOnInit(): void {}

  login(): void {
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

  getErrorMessage(key: string) {
    switch (key) {
      case 'email':
        return constants.errorMessages.email;
      case 'password':
        return constants.errorMessages.password;
      default:
        return constants.errorMessages.default;
      break;
    }
  }
}

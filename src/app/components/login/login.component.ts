import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';
import { constants } from '../../constants/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) {}

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  ngOnInit(): void {
  }

  login(): void {
    if (!this.email.errors && !this.password.errors) {
      this.loginService.setLoggedInStatus(true);
    }
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return constants.errorMessages.email;
    }
    if (this.password.hasError('required')) {
      return constants.errorMessages.password;
    }
    return '';
  }

  signUp() {
    // add routing, but for now, just display different page
    
  }
}

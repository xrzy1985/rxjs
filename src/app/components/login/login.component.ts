import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';

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
    console.log(this.email.value, this.password.value);
    if (!this.email.errors && !this.password.errors) {
      this.loginService.setUserLoggedInStatus(true);
    }
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a valid email address';
    }
    if (this.password.hasError('required')) {
      return 'You must enter a valid password';
    }
    return '';
  }
}

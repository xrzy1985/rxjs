import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';
import { constants } from '../../constants/constants';
import { ActivatedRoute , Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  ngOnInit(): void {
  }

  signUp(): void {
    if (!this.email.errors && !this.name.errors && !this.password.errors) {
      this.loginService.setLoggedInStatus(true);
      this.router.navigateByUrl('');
    }
  }

  getErrorMessage(key: string) {
    switch (key) {
      case 'name':
        return constants.errorMessages.name;
        break;
      case 'email':
        return constants.errorMessages.email;
        break;
      case 'password':
        return constants.errorMessages.password;
        break;
      default:
        return '';
        break;
    }
  }

}

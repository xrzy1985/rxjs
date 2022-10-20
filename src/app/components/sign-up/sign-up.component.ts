import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';
import { constants } from '../../constants/constants';
import { ActivatedRoute , Router, ParamMap} from '@angular/router';
import { ErrorHandler } from '../../classes/error-handler';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent extends ErrorHandler {

  constructor(private loginService: LoginService, private router: Router) {
    super();
  }

  protected email = new FormControl('', [Validators.required, Validators.email]);
  protected name = new FormControl('', [Validators.required]);
  protected password = new FormControl('', [Validators.required]);
  protected title: string = environment.title;

  public signUp(): void {
    if (!this.email.errors && !this.name.errors && !this.password.errors) {
      this.loginService.setLoggedInStatus(true);
      this.router.navigateByUrl('');
    }
  }

}

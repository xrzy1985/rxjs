import { Component } from '@angular/core';
import { LoginService } from './services/login/login.service';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: []
})
export class AppComponent {
  constructor(private login: LoginService) {
    this.title = 'rxjs-tutorial';
  }

  title: string;
}

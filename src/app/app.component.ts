import { Component } from '@angular/core';
import { LoginService } from './services/login/login.service';

@Component({
  selector: 'app-root',
  template: `
    <app-entry></app-entry>
  `,
  styleUrls: []
})
export class AppComponent {
  constructor(private login: LoginService) {
    this.title = 'rxjs-tutorial';
  }

  title: string;
}

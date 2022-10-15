import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-main *ngIf="isLoggedIn" title="title"></app-main>
    <app-login *ngIf="!isLoggedIn"></app-login>
  `,
  styleUrls: []
})
export class AppComponent {
  title = 'rxjs-tutorial';
  isLoggedIn = false;
}

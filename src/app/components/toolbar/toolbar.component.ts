import { Component, DoCheck, Input } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
// constants

@Component({
  selector: 'app-toolbar',
  template: `
    <p>
      <mat-toolbar color="primary">
        <button mat-icon-button
          class="menu-icon" 
          aria-label="Menu icon">
          <mat-icon fontIcon="menu"></mat-icon>
        </button>
        <span>{{ title }}</span>
        <span class="spacer"></span>
        <button mat-raised-button
          aria-label="log out button"
          color="warn"
          *ngIf="loggedIn">
          Log Out
        </button>
      </mat-toolbar>
    </p>`,
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  constructor(private loginService: LoginService) {
    this.loggedIn = false;
    this.name = '';
    this.title = '';
  }

  ngDoCheck() {
    this.loggedIn = this.loginService.getUserLoggedInStatus();
  }

  loggedIn: boolean;
  @Input() title: string;
  name: string;
}
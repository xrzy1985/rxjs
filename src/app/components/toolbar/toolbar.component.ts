import { Component, Input } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { BehaviorSubject } from 'rxjs';
// constants

@Component({
  selector: 'app-toolbar',
  template: `
    <p>
      <mat-toolbar class="toolbar">
        <button mat-icon-button
          class="menu-icon" 
          aria-label="Menu icon">
          <mat-icon fontIcon="menu"></mat-icon>
        </button>
        <span>{{ title }}</span>
        <span class="spacer"></span>
        <button mat-raised-button
          aria-label="log out button"
          (click)="logout()"
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
    this.loginService.getLoggedInStatus().subscribe((status) => {
      this.loggedIn = status;
    });
    this.name = '';
    this.title = '';
  }

  protected loggedIn: boolean = false;
  protected name: string;
  @Input() title: string;

  logout() {
    this.loginService.setLoggedInStatus(false);
  }
}
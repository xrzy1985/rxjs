import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { SideNavService } from '../../services/side-nav/side-nav.service';
// constants

@Component({
  selector: 'app-toolbar',
  template: `
    <p>
      <mat-toolbar class="toolbar">
        <button mat-icon-button
          aria-label="side navigation icon"
          class="side-nav-icon"
          (click)="sideNavService.setIsOpen()">
          <mat-icon
            aria-label="side navigation icon button"
            fontIcon="menu">
          </mat-icon>
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

  constructor(private loginService: LoginService, protected sideNavService: SideNavService) {
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
import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { LoginService } from '../../services/login/login.service';
import { SideNavService } from '../../services/side-nav/side-nav.service';

@Component({
  selector: 'app-entry',
  template: `
    <mat-drawer-container class="drawer-container">
    <mat-drawer [mode]="'side'"
      opened="{{sideNavService.getIsOpen()}}">
      <div class="side-nav-header"></div>
      <div class="side-nav">
        <br>
        <button mat-button>{{home}}</button>
        <br>
        <button mat-button>{{about}}</button>
        <br>
        <button mat-button>{{profile}}</button>
      </div>
    </mat-drawer>
      <mat-drawer-content>
        <app-toolbar title="{{title}}"></app-toolbar>
        <app-login *ngIf="!loggedIn"></app-login>
        <app-main *ngIf="loggedIn" title="{{title}}"></app-main>
      </mat-drawer-content>
    </mat-drawer-container>
  `,
  styleUrls: []
})
export class EntryComponent {

  constructor(private loginService: LoginService, protected sideNavService: SideNavService) {
    this.loginService.getLoggedInStatus().subscribe((status) => {
      this.loggedIn = status;
    });
  }

  protected about: string = environment.sideNav.about;
  protected home: string = environment.sideNav.home;
  protected profile: string = environment.sideNav.profile;
  protected loggedIn: boolean = false;
  protected title: string = environment.title;

}

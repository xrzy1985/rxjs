import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-entry',
  template: `
    <app-toolbar title="RxJs"></app-toolbar>
    <app-login *ngIf="!loggedIn"></app-login>
    <app-main *ngIf="loggedIn" title="title"></app-main>
  `,
  styleUrls: []
})
export class EntryComponent implements OnInit {

  constructor(private loginService: LoginService) {
    this.loginService.getLoggedInStatus().subscribe((status) => {
      this.loggedIn = status;
    });
  }

  loggedIn: boolean = false;

  ngOnInit(): void {
  }

}

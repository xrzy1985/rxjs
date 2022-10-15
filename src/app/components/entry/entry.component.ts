import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  constructor(private loginService: LoginService) {
    this.isUserLoggedIn = this.loginService.getUserLoggedInStatus();
  }

  isUserLoggedIn: boolean;

  ngOnInit(): void {
  }

  isLoggedIn(): boolean {
    return this.loginService.getUserLoggedInStatus();
  }

}
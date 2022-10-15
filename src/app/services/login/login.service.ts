import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() {
    this.isLoggedIn = false;
  }

  isLoggedIn: boolean;

  getUserLoggedInStatus(): boolean {
    return this.isLoggedIn;
  }

  setUserLoggedInStatus(status: boolean): void {
    this.isLoggedIn = status;
  }
}

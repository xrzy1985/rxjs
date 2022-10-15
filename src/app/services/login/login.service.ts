import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() {}

  loggedInStatus$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public setLoggedInStatus(status: boolean): void {
    this.loggedInStatus$.next(status);
  }

  public getLoggedInStatus(): Observable<boolean> {
    return this.loggedInStatus$.asObservable();
  }
}

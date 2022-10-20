import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  loggedInStatus$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public setLoggedInStatus(status: boolean): void {
    if (status) {
      this.loggedInStatus$.next(status);
    }
  }

  public getLoggedInStatus(): Observable<boolean> {
    return this.loggedInStatus$.asObservable();
  }

  public encrypted(value: string | null | undefined) {
    if (value === null || value === undefined) {
      return '';
    }
    return CryptoJS.AES.encrypt(
      value,
      CryptoJS.enc.Utf8.parse(environment.key),
      { iv: CryptoJS.enc.Utf8.parse(environment.salt) }
    ).toString();
  }

  public decrypted(value: string | null | undefined) {
    if (value === null || value === undefined) {
      return '';
    }
    var cipherParams = CryptoJS.lib.CipherParams.create({
      ciphertext: CryptoJS.enc.Base64.parse(value),
    });
    return CryptoJS.AES.decrypt(
      cipherParams,
      CryptoJS.enc.Utf8.parse(environment.key),
      {
        iv: CryptoJS.enc.Utf8.parse(environment.salt),
      }
    ).toString(CryptoJS.enc.Utf8);
  }
}

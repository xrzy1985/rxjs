import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  constructor() {
    this.isOpen = false;
  }

  public isOpen: boolean;

  public getIsOpen(): boolean {
    return this.isOpen;
  }

  public setIsOpen(status?: boolean): void {
    this.isOpen = status !== undefined ? status : !this.isOpen;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  constructor() {
    this.isOpen = false;
  }

  public isOpen: boolean;

  getIsOpen(): boolean {
    return this.isOpen;
  }

  setIsOpen(): void {
    this.isOpen = !this.isOpen;
  }
}

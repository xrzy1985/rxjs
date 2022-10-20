import { Injectable } from '@angular/core';

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

  public setIsOpen(status?: boolean | null | undefined): void {
    this.isOpen = status ? status : !this.isOpen;
  }
}

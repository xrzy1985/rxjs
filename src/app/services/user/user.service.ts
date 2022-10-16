import { Injectable } from '@angular/core';
import { Users } from '../../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
    this.user = {id: -1, name: '', email: ''};
  }

  let user: Users;
}

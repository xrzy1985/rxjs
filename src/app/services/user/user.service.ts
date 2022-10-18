import { Injectable } from '@angular/core';
import { Users } from '../../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {}

  private user: Users = { id: -1, name: '', email: '' };
}

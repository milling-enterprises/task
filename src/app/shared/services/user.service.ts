import { Injectable } from '@angular/core';
import { List } from '../models/list';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser = (): User => {
    let user: User = {
      firstName: '',
      lastName: '',
      permissions: [],
      lists: [],
      settings: []
    };

    return user;
  }


  getUserLists = (): List[] => {
    let lists: List[] = [];

    return lists;
  }


}

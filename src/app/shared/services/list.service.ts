import { Injectable } from '@angular/core';
import { List } from '../models/list';
import { User } from '../models/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private user: User = null;

  constructor(private userService: UserService) {
    this.user = this.userService.getUser();
  }

  /**
   * Get all Lists in User List[]
   * @returns List[]
   */
  getLists = (): List[] => {
    return this.user.lists;
  }

  /**
   * Searches the Users List[] to find one with the ID provided then
   * return the matching List object if one is found, otherwise, it will return null.
   * @param id Unique string identifier
   * @returns List or null
   */
  getListById = (id: string) => {

    let list: List = null;

    Object.values(this.user.lists).forEach(value => {
      if(value.id === id) list = value;
    });

    return list;
  }

  /**
   * Searches the Users List[] to find one with the name provided then
   * return the matching List object if one is found, otherwise, it will return null.
   * @param name Name provided by user
   * @returns List or null
   */
  getListByName = (name: string) => {
    let list: List = null;

    Object.values(this.user.lists).forEach(value => {
      if(value.name === name) list = value;
    });

    return list;

  }

}

import { Injectable } from '@angular/core';
import { Errors } from '../enums/errors';
import { Status } from '../enums/status.enum';
import { List } from '../models/list';
import { Task } from '../models/task.model';
import { MessageService } from './error.service';
import { ListService } from './list.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private listService: ListService, private messageService: MessageService){}

  doesTaskExistInList = (name: string, tasks: Task[]) => {
    let exists = false;

    if(this.getTaskByName(name) !== null) exists = true;

    return exists;
  }

  updateTask(updatedTask: Task) {

  }

  updateStatus(status: Status) {
    // if(this.canTransitionTo(this.task.status, status)) this.task.status = status;
  }

  createTask = (task: Task, listId?: string, listName?: string) => {


    let list = listId !== undefined || null ? this.listService.getListById(listId) : (listName !== undefined || null ? this.listService.getListByName(listName) : null);

    if(list && !this.doesTaskExistInList(task.name, list.tasks)) {
      list.tasks.push(task);
    } else {
      let error = this.messageService.getErrorMessage(Errors.DuplicateTask);
    }

  }

  editTask = () => {

  }

  updateTaskStatus = () => {

  }

  addSubtask = () => {

  }

  getTaskById = (id: string, listId?: string, list?: List) : Task => {
    let task: Task = null;

    if(listId || listId != undefined || listId != null) {
      task = this.getTaskByIdWithListId(id, listId);
    } else if(list || list != undefined || list != null) {
      task = this.getTaskByIdWithList(id, list);
    }

    return task;
  }

  private getTaskByIdWithListId = (id: string, listId: string) : Task => {
    let list: List = this.listService.getListById(listId);

    return this.getTaskByIdWithList(id, list);
  }

  private getTaskByIdWithList = (id: string, list: List) : Task => {
    let task: Task = list.tasks.find(t => {
      t.id === id;
    });

    return task;
  }

  getTaskByName = (name: string, listId?: string, list?: List): Task => {
    let task: Task = null;

    if(listId || listId != undefined || listId != null) {
      task = this.getTaskByNameWithListId(name, listId);
    } else if(list || list != undefined || list != null) {
      task = this.getTaskByNameWithList(name, list);
    }

    return null;
  }

  private getTaskByNameWithListId = (name: string, listId: string): Task => {
    let list: List = this.listService.getListById(listId);
    return this.getTaskByNameWithList(name, list);
  }

  private getTaskByNameWithList = (name: string, list: List): Task => {
    let task: Task = list.tasks.find(t => {
      t.name === name;
    });

    return task;
  }

  getTasksByStatus = (status: Status, listId?: string, list?: List) => {
    let task: Task = null;

    if(listId || listId != undefined || listId != null) {
      task = this.getTasksByStatusWithListId(status, listId);
    } else if(list || list != undefined || list != null) {
      task = this.getTasksByStatusWithList(status, list);
    }

    return task;
  }

  private getTasksByStatusWithListId = (status: Status, listId: string) => {
    return (this.getTasksByStatusWithList(status, this.listService.getListById(listId)));
  }

  private getTasksByStatusWithList = (status: Status, list: List) => {
    return list.tasks.find(t => {
      t.status = status;
    });
  }

  getTasksByCreatedDate = () => {

  }

  getTasksByStartedDate = () => {

  }

  getTasksByCompletedDate = () => {

  }

  getSubTasksById = () => {

  }

  getSubTasksByName = () => {

  }

  getSubTasksByStatus = () => {

  }

  getSubTasksByCreatedDate = () => {

  }

  getSubTasksByStartedDate = () => {

  }

  getSubTasksByCompletedDate = () => {

  }

  canTransitionTo(from: Status, to: Status) {
    let canTransition: boolean = false;
    switch (from) {
      case Status.Done:
        if(to === Status.InProgress || to === Status.OnHold  || to === Status.Todo) canTransition = true;
        break;
      case Status.InProgress:
        if(to === Status.Done || to === Status.OnHold  || to === Status.Todo) canTransition = true;
        break;
      case Status.OnHold:
        if(to === Status.InProgress) canTransition = true;
        break;
      case Status.Todo:
        if(to === Status.Done || to === Status.InProgress) canTransition = true;
        break;
      default:
        break;
    }

    return canTransition;
  }
}

import { Task } from "./task.model";

export interface List {
  id: string,
  name: string,
  description: string,
  tasks: Task[],
  createdDate: Date,
  updatedDate: Date,
  hasOpenTasks: boolean,
  isArchived: boolean,
  isActive: boolean
}

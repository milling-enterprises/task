import { Status } from "../enums/status.enum";

export interface Task {
  id: string,
  name: string,
  description: string,
  createDate: Date,
  startedDate?: Date,
  completedDate?: Date,
  status: Status,
  subTasks?: Task[],
  isSubtask: boolean
}


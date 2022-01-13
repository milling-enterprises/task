import { Permissions } from "../enums/permissions";
import { List } from "./list";
import { Setting } from "./setting";

export interface User {
  firstName: string,
  lastName: string,
  permissions: Permissions[],
  lists: List[],
  settings: Setting[];

}

import { UserService } from "../services/user.service";
import { Option } from "./option.model";

export class NavOptions {
  options: Option[] = [];

  constructor(private userService: UserService) {

  }

  initOptions = () => {

  }
}

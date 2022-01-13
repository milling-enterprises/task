import { OptionTypes } from "../enums/options-types";

export interface Option {
  name: string,
  description: string,
  path: string,
  icon: string,
  type: OptionTypes
}

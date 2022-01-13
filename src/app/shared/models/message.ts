import { MessageType } from "../enums/message-type";

export interface Message {
  name: string,
  message: string,
  type: MessageType
}

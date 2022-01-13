import { Injectable } from '@angular/core';
import { Errors } from '../enums/errors';
import { MessageType } from '../enums/message-type';
import { Messages } from '../enums/messages';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  getErrorMessage = (errorType: Errors): Message => {
    let message: Message = null;
    switch (errorType) {
      case Errors.DuplicateList:
        message = {
          name: errorType,
          message: Messages.Error_DuplicateListMessage,
          type: MessageType.Error
        };
        break;
      case Errors.DuplicateTask:
        message = {
          name: errorType,
          message: Messages.Error_DuplicateTaskErrorMessage,
          type: MessageType.Error
        };
        break;
      case Errors.InvalidCredentials:
        message = {
          name: errorType,
          message: Messages.Error_InvalidCredentialsMessage,
          type: MessageType.Error
        };
        break;
      default:
        message = {
          name: errorType,
          message: Messages.Error_UnknownErrorMessage,
          type: MessageType.Error
        };
        break;
    }

    return message;
  }
}

import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() {
  }

  confirm(message: string, okCallback: () => any): void {
    alertify.confirm(message, (event) => {
      if (event) {
        okCallback();
      }
    });
  }

  success(message: string) {
    alertify.success(message);
  }

  error(message: string) {
    alertify.error(message);
  }

  warning(message: string) {
    alertify.warning(message);
  }

  info(message: string) {
    alertify.message(message);
  }
}

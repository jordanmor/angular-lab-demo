import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  
  // A private BehaviorSubject that will hold the current value of the message
  private messageSource = new BehaviorSubject('default message');
  // Handles the data stream as an observable that will be used by the components
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  // When this function is executed the new data 
  // is automatically broadcast to all other components.
  setMessage(message: string) {
    this.messageSource.next(message);
  }
}

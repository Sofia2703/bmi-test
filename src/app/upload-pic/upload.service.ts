import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(imageSend: string) {
    this.messageSource.next(imageSend)
  }

}

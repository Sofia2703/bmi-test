import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UploadService {
  //pic
  private messageSource = new BehaviorSubject('default message Pic');
  currentMessage = this.messageSource.asObservable();

  //text
  private messageSourceText = new BehaviorSubject('default message Text');
  currentMessageText = this.messageSourceText.asObservable();

  constructor() { }

  //pic
  changeMessage(imageSend: string) {
    this.messageSource.next(imageSend)
  }

  //Text
  changeMessageText(text: any) {
    this.messageSourceText.next(text)
    console.log('list service', text)
  }

}

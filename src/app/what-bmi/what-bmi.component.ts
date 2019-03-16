import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-what-bmi',
  templateUrl: './what-bmi.component.html',
  styleUrls: ['./what-bmi.component.scss']
})
export class WhatBmiComponent implements OnInit {
  message:string;

  a: string = 'text send';

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }


}

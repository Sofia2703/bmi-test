import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-healthy',
  templateUrl: './healthy.component.html',
  styleUrls: ['./healthy.component.scss']
})
export class HealthyComponent implements OnInit {
  message:string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  
}

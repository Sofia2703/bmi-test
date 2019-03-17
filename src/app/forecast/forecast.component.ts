import { Component, OnInit } from '@angular/core';
import { UploadService } from '../upload-pic/upload.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  // showFiller = false;
  imageUrl: string = 'http://placehold.it/800';
  imageSend: string;

  constructor(private data: UploadService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(imageSend => this.imageSend = imageSend)
  }




}

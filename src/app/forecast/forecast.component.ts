import { Component, OnInit } from '@angular/core';
import { UploadService } from '../upload-pic/upload.service';
// import { UploadPicComponent } from '../upload-pic/upload-pic.component';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  // showFiller = false;
  imageUrl: string = 'http://placehold.it/800';
  constructor(
    private upload: UploadService
    
  ) { }

  ngOnInit() {
    
  }

}

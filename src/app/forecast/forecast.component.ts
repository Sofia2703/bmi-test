import { Component, OnInit } from '@angular/core';
import { UploadService } from '../upload-pic/upload.service';
import { BmiService } from '../bmi.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  // showFiller = false;
  imageUrl: string = 'http://placehold.it/800';
  imageSend: string;

  public getdata = [];

  constructor(private data: UploadService, 
    private bmiService: BmiService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(imageSend => this.imageSend = imageSend)

    // python
    this.bmiService.getEmployess()
      .subscribe(data => {
        this.getdata.push(data);
        console.log('dta', data);
      });

      console.log('dta2', this.getdata);
  }




}

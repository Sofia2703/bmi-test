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
  imageUrl: string = 'https://via.placeholder.com/400x500?text=this+your+photo';
  imageSend: string;

  public text: string;

  constructor(private data: UploadService, 
    private bmiService: BmiService) { }

  ngOnInit() {
    //pic
    this.data.currentMessage.subscribe(imageSend => this.imageSend = imageSend)

    //text
    this.data.currentMessageText.subscribe(text => this.text = text)

  }




}

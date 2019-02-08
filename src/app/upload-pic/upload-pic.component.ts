import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-pic',
  templateUrl: './upload-pic.component.html',
  styleUrls: ['./upload-pic.component.scss']
})
export class UploadPicComponent implements OnInit {
  url: string = 'http://placehold.it/180';

  constructor() { }

  ngOnInit() {
  }

  onFileSelected(event) {
    console.log(event); //----------1
  }

  

}

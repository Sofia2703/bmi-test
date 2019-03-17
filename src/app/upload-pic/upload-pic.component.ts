import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UploadService } from './upload.service';
import { BehaviorSubject,Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-upload-pic',
  templateUrl: './upload-pic.component.html',
  styleUrls: ['./upload-pic.component.scss']
})
export class UploadPicComponent implements OnInit {
  imageUrl: string = 'http://placehold.it/800';
  // imageUrl : string = "/assets/img/man-icon.png"
  imageSend:string;
  fileToUpload : File = null;

  constructor(private http:HttpClient
    ,private upload:UploadService) { }

  ngOnInit() {
    
  }

  handleFileInput(file : FileList) {
    
    this.fileToUpload = file.item(0);
    //Show img Preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
      this.imageSend = event.target.result;
      console.log('gi',this.imageUrl);
    }
    reader.readAsDataURL(this.fileToUpload);
  }
}

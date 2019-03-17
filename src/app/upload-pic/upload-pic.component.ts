import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UploadService } from './upload.service';
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

  message:string;

  constructor(private data: UploadService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  handleFileInput(file : FileList) {
    
    this.fileToUpload = file.item(0);
    //Show img Preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
      this.imageSend = event.target.result;
      console.log('gi',this.imageSend);
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  newMessage() {
    this.data.changeMessage(this.imageSend);
  }
  
}

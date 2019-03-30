import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UploadService } from './upload.service';
@Component({
  selector: 'app-upload-pic',
  templateUrl: './upload-pic.component.html',
  styleUrls: ['./upload-pic.component.scss']
})
export class UploadPicComponent implements OnInit {
  imageUrl: string = 'https://via.placeholder.com/900x1000?text=select+your+photo';
  imageSend:string = null;
  fileToUpload : File = null;
  message:string;

  //test
  //count: number = 0;
  buttonDisabled: boolean = true;
  //end

  constructor(private data: UploadService) { }

  ngOnInit() {
    // console.log('string check',this.imageSend);
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  handleFileInput(file : FileList) {
    
    this.fileToUpload = file.item(0);
    //Show img Preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
      this.imageSend = event.target.result;
      this.buttonDisabled = false;
      console.log('gi',this.imageSend);
      console.log('btn',this.buttonDisabled);
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  newMessage() {
    this.data.changeMessage(this.imageSend);
  }
  
}

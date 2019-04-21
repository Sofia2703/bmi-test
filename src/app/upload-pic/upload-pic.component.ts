import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UploadService } from './upload.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BmiService } from '../bmi.service';
@Component({
  selector: 'app-upload-pic',
  templateUrl: './upload-pic.component.html',
  styleUrls: ['./upload-pic.component.scss']
})
export class UploadPicComponent implements OnInit {
  imageUrl: string = 'https://via.placeholder.com/900x1000?text=select+your+photo';
  imageSend: string = null;
  fileToUpload: File = null;
  message: string;
  message2: string;

  //test
  public fileSent = [];
  public text: string;
  //end
  
  buttonDisabled: boolean = true;


  constructor(private data: UploadService,private router: Router, private bmiService: BmiService) { }

  ngOnInit() {
    // console.log('string check',this.imageSend);
    this.data.currentMessage.subscribe(message => this.message = message)
    this.data.currentMessageText.subscribe(message2 => this.message2 = message2)
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    //Show img Preview
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
      this.imageSend = event.target.result;
      this.buttonDisabled = false;
      //console.log('gi', this.imageSend);
      //console.log('btn', this.buttonDisabled);
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  newMessage() {

    this.bmiService.Postdata(this.fileToUpload).subscribe(data => {
      console.log('done');
      this.fileSent.push(data);
      this.text = this.fileSent[0].class;
      console.log('txt', this.text);

      //sent to service
      this.data.changeMessageText(this.text);
      this.router.navigate(['/forecast']);
    })
    //pic
    this.data.changeMessage(this.imageSend);
    // this.router.navigate(['/forecast']);
    
  }

  

}

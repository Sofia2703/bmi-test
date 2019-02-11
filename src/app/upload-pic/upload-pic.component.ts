import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-pic',
  templateUrl: './upload-pic.component.html',
  styleUrls: ['./upload-pic.component.scss']
})
export class UploadPicComponent implements OnInit {
  imageUrl: string = 'http://placehold.it/800';
  // imageUrl : string = "/assets/img/man-icon.png"
  fileToUpload : File = null;
  fileToUpload2 : File = null;

  constructor() { }

  ngOnInit() {
  }

  onFileSelected(event) {
    console.log(event);
  }

  handleFileInput(file : FileList) {
    console.log('gi',file.item(0));
    this.fileToUpload = file.item(0);

    //Show img Preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

}

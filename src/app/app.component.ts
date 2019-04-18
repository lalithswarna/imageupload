
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logo: any;
  title = 'imageupload';

 onFileChange(fileInput: any){
  this.logo = fileInput.target.files[0];

  let reader = new FileReader();

  reader.onload = (e: any) => {
      this.logo = e.target.result;
  }

  reader.readAsDataURL(fileInput.target.files[0]);
}
}
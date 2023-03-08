import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  pdfSrc = "../assets/mBridge-brochure.pdf";
  zoom: number = 1.0;
  constructor() {}

  subtratZoom() {
    if(this.zoom > 0) {
      this.zoom -= 0.5;
    }
  }

  addZoom() {
    this.zoom += 0.5;
  }

}

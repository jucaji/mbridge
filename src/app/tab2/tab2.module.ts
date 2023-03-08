import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import {PdfViewerModule} from "ng2-pdf-viewer";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    PdfViewerModule,
    MatIconModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}

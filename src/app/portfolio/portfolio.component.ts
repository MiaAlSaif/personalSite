import { Component, OnInit, NgModule, VERSION } from '@angular/core';
import 'hammerjs';
import 'mousetrap';
import { ModalGalleryModule } from '@ks89/angular-modal-gallery';
import { BrowserModule } from '@angular/platform-browser';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

import {
  AccessibilityConfig,
  Action,
  AdvancedLayout,
  ButtonEvent,
  ButtonsConfig,
  ButtonsStrategy,
  ButtonType,
  Description,
  DescriptionStrategy,
  DotsConfig,
  GalleryService,
  GridLayout,
  Image,
  ImageModalEvent,
  LineLayout,
  PlainGalleryConfig,
  PlainGalleryStrategy,
  PreviewConfig
} from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

name: string;
constructor(private galleryService: GalleryService,
  private sanitizer: DomSanitizer) {
  this.name = `${VERSION.full}`
}

imageIndex = 1;
galleryId = 1;

// plainGalleryGrid: PlainGalleryConfig = {
//     strategy: PlainGalleryStrategy.GRID,
//     layout: new GridLayout({ width: '30%', height: '40%' }, { length: 3, wrap: true })
//   };

customPlainGalleryRowDescConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };

  openImageModalRowDescription(image: Image) {
    const index: number = this.getCurrentIndexCustomLayout(image, this.images);
    this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, { layout: new AdvancedLayout(index, true) });
  }

  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  };

  images: Image[] = [
   new Image(
     0,
     { // modal
       img: '/assets/images/cProjectCoffee.jpg',
       // description: 'C Project Coffee',
       extUrl: 'https://github.com/MiaAlSaif/cProjectCoffee'
     }
   ),
   new Image(
     1,
     { // modal
       img: '/assets/images/elephantInTheRoom.jpg',
       // description: 'Elephant in The Room',
       extUrl: 'https://github.com/MiaAlSaif/elephantInTheRoom'
     }
   ),
   new Image(
     2,
     { // modal
       img: '/assets/images/img1.jpg',
       // description: 'C Project Coffee',
       extUrl: 'https://github.com/MiaAlSaif'
     }
   ),
   new Image(
     3,
     { // modal
       img: '/assets/images/img2.jpg',
       // description: 'Elephant in The Room',
       extUrl: 'https://github.com/MiaAlSaif'
     }
    ),
   // new Image(
   //   4,
   //   { // modal
   //     img: '/assets/images/img3.jpg',
   //     // description: 'Elephant in The Room',
   //     extUrl: '#'
   //   }
   // ),
   // new Image(
   //   5,
   //   { // modal
   //     img: '/assets/images/img4.jpg',
   //     // description: 'Elephant in The Room',
   //     extUrl: '#'
   //   }
   // )
 ];


customDescriptionHideIfEmpty: Description = {
    strategy: DescriptionStrategy.HIDE_IF_EMPTY,
    imageText: 'Article ',
    numberSeparator: ' of ',
    beforeTextDescription: ' => '
  };
customButtonsConfigExtUrlNewTab: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.CUSTOM,
    buttons: [
      {
        className: 'ext-url-image',
        type: ButtonType.EXTURL,
        extUrlInNewTab: true // <--- this is the important thing to understand this example
      },

      {
        className: 'close-image',
        type: ButtonType.CLOSE
      }
    ]
  };


  ngOnInit() {
  }

}

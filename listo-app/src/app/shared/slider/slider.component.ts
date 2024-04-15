import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  imageObject: Array<object> = [
    {
      image: '../../../assets/login/listo.png',
      thumbImage: '../../../assets/login/listo.png',
      alt: 'alt of image',
      // title: 'title of image'
    },
    {
      image: '../../../assets/login/1.png',
      thumbImage: '../../../assets/login/1.png',
      alt: 'alt of image',
      // title: 'title of image'
    },
    {
      image: '../../../assets/login/2.png', // Support base64 image
      thumbImage: '../../../assets/login/2.png', // Support base64 image
      title: 'Image title', //Optional: You can use this key if want to show image with title
      // alt: 'Image alt', //Optional: You can use this key if want to show image with alt
      order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
    },
    {
      image: '../../../assets/login/3.png', // Support base64 image
      thumbImage: '../../../assets/login/3.png', // Support base64 image
      // title: 'Image title', //Optional: You can use this key if want to show image with title
      alt: 'Image alt', //Optional: You can use this key if want to show image with alt
      order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
    }
];
}

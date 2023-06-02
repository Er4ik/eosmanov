import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  images = [
    'assets/pictures/1.jpg',
    'assets/pictures/2.jpg',
    'assets/pictures/9.jpg',
    'assets/pictures/4.png',
    'assets/pictures/5.png',
    'assets/pictures/6.png',
    'assets/pictures/10.jpg',
    'assets/pictures/7.jpg',
    'assets/pictures/8.jpg',
  ];

  selectedImage: string | null = null;

  constructor() {}

  OnContactClick() {
    window.open("mailto:ervin.osmanov.007@gmail.com", '_blank')
  }

  showImage(image: string) {
    this.selectedImage = image;
  }

  hideImage() {
    this.selectedImage = null;
  }
}

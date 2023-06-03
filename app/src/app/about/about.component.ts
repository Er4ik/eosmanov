import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
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

  ngOnInit(): void {
    this.scrollToTop();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  OnContactClick() {
    const mailtoLink = "mailto:ervin.osmanov.007@gmail.com";
    window.open(mailtoLink, '_blank')
  }

  showImage(image: string) {
    this.selectedImage = image;
  }

  hideImage() {
    this.selectedImage = null;
  }
}

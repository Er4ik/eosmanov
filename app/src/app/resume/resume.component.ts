import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  constructor(private readonly router: Router) {  }

  onPdfClick() {
    const pdfUrl = "https://drive.google.com/file/d/1scLEkPPCaSn-dFoDI8GgXr6de7pN0t-n/view?usp=sharing";
    window.open(pdfUrl, '_blank');
  }
}

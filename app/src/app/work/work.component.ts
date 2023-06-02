import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent {
  constructor(private readonly router: Router) { }

  onAboutPageClick() {
    this.router.navigateByUrl('/about');
  }
}

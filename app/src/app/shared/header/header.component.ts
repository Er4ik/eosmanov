import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  activeTab: string = '';

  constructor(private readonly router: Router) {}

  handleTab(tab: string) {
    this.activeTab = tab;
    this.router.navigateByUrl(`/${tab}`);
  }
}

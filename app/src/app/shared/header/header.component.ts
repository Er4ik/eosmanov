import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input()
  activeTab: string = '';
  isBurgerActive = false;

  tabs = [
    {
      tab: '',
      text: 'Select Work',
    },
    {
      tab: 'resume',
      text: 'Resume',
    },
    {
      tab: 'about',
      text: 'About + Connect',
    },
  ]

  constructor(private readonly router: Router) {}

  toggleMenu() {
    this.isBurgerActive = !this.isBurgerActive;
  }

  handleTab(tab: string) {
    this.activeTab = tab;
    this.router.navigateByUrl(`/${tab}`);
  }

  handleEvent(event: Event) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('menu-item')) {
      this.isBurgerActive = false;
    }
  }
}

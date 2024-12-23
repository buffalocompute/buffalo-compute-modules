import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone: true,
})
export class NavbarComponent {
  navbarMobileVisible = false;

  toggleMobileMenu() {
    this.navbarMobileVisible = !this.navbarMobileVisible;
  }

  links = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Articles', href: '/articles' },
    { text: 'Blueprints', href: '/blueprints' },
    { text: 'Tools', href: '/tools' },
  ];
}

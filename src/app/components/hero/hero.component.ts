import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  downloadResume() {
    window.open('https://drive.google.com/file/d/1-pfnAlP4Hx_ehgceCS-J2oP2dNtsr9sc/view?usp=drive_link', '_blank');
  }
}

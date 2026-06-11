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
    const link = document.createElement('a');
    link.href = 'assets/Gokul_Resume.pdf';
    link.download = 'Gokul_Resume.pdf';
    link.click();
  }
}

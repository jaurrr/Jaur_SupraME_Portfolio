import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<footer class="footer">
    <p class="label">The Editorial · Ma × Wipe · 2026</p>
    <p>© 2026 Jauhar Ayyub. Set in Fraunces &amp; Inter.</p>
    <a class="to-top" (click)="top()" (keydown.enter)="top()" tabindex="0" role="link" aria-label="Back to top">Back to top ↑</a>
  </footer>`,
})
export class FooterComponent {
  protected top(): void {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  }
}

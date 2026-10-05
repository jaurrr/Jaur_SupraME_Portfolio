import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CONTACT_IMAGE, PROFILE } from '../../data/portfolio';
import { ImgWipeDirective } from '../../directives/imgwipe';
import { PanelDirective } from '../../directives/panel';
import { RevealDirective } from '../../directives/reveal';

@Component({
  selector: 'app-contact',
  imports: [RevealDirective, PanelDirective, ImgWipeDirective, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  protected readonly profile = PROFILE;
  protected readonly contactImage = CONTACT_IMAGE;

  protected readonly name = signal('');
  protected readonly email = signal('');
  protected readonly message = signal('');
  protected readonly note = signal('');

  protected submit(): void {
    if (!this.name().trim() || !this.email().trim() || !this.message().trim()) {
      this.note.set('Please fill in all three fields.');
      return;
    }
    const subject = encodeURIComponent(`Portfolio enquiry from ${this.name().trim()}`);
    const body = encodeURIComponent(
      `Hi Jauhar,\n\n${this.message().trim()}\n\n— ${this.name().trim()} (${this.email().trim()})`,
    );
    this.note.set('Opening your email app…');
    window.location.href = `mailto:${this.profile.email}?subject=${subject}&body=${body}`;
    window.setTimeout(() => this.note.set(''), 5000);
  }
}

import { Component, HostListener, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CERTIFICATIONS, EDUCATION, EXPERIENCE, type Certificate } from '../../data/portfolio';
import { ImgWipeDirective } from '../../directives/imgwipe';
import { PanelDirective } from '../../directives/panel';
import { RevealDirective } from '../../directives/reveal';

@Component({
  selector: 'app-experience',
  imports: [RevealDirective, PanelDirective, ImgWipeDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceComponent {
  private readonly sanitizer = inject(DomSanitizer);

  protected readonly exp = EXPERIENCE;
  protected readonly certs = CERTIFICATIONS;
  protected readonly education = EDUCATION;
  protected readonly selectedCert = signal<Certificate | null>(null);
  protected readonly certUrl = signal<SafeResourceUrl | null>(null);

  protected openCert(cert: Certificate): void {
    this.certUrl.set(this.sanitizer.bypassSecurityTrustResourceUrl(cert.pdf));
    this.selectedCert.set(cert);
    document.body.style.overflow = 'hidden';
  }

  protected closeCert(): void {
    this.selectedCert.set(null);
    this.certUrl.set(null);
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    if (this.selectedCert()) {
      this.closeCert();
    }
  }
}

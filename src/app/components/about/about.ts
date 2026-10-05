import { AfterViewInit, Component, ElementRef, OnDestroy, QueryList, ViewChildren } from '@angular/core';
import { ABOUT } from '../../data/portfolio';
import { ImgWipeDirective } from '../../directives/imgwipe';
import { PanelDirective } from '../../directives/panel';
import { RevealDirective } from '../../directives/reveal';

/** About section with animated stat counters (3+, 4, 15+). */
@Component({
  selector: 'app-about',
  imports: [RevealDirective, PanelDirective, ImgWipeDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent implements AfterViewInit, OnDestroy {
  protected readonly about = ABOUT;

  @ViewChildren('statVal') private statEls?: QueryList<ElementRef<HTMLElement>>;
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const run = (el: HTMLElement): void => {
      const raw = (el.dataset['raw'] ?? '').trim();
      const match = raw.match(/^(\d+)(.*)$/);
      if (!match) {
        el.textContent = raw;
        return;
      }
      const target = Number(match[1]);
      const suffix = match[2];
      if (reduce) {
        el.textContent = raw;
        return;
      }
      let t0 = 0;
      const DUR = 1400;
      const step = (ts: number): void => {
        if (!t0) t0 = ts;
        const p = Math.min((ts - t0) / DUR, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            run(entry.target as HTMLElement);
            this.observer?.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.6 },
    );
    this.statEls?.forEach((ref) => this.observer?.observe(ref.nativeElement));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}

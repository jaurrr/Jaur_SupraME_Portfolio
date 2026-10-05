import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';

/**
 * Section panel for the clip-path wipe system. The host gets `.panel`
 * semantics; when it scrolls into view it gains `.inview`, which fires the
 * `.wipe` overlay animation and all nested `.rv` reveals.
 * Usage: <section id="about" appPanel>…<div class="wipe" aria-hidden="true"></div>…
 */
@Directive({
  selector: '[appPanel]',
})
export class PanelDirective implements OnInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    const native = this.el.nativeElement;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      this.renderer.addClass(native, 'inview');
      return;
    }
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.renderer.addClass(native, 'inview');
            this.observer?.disconnect();
            this.observer = undefined;
            break;
          }
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' },
    );
    this.observer.observe(native);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}

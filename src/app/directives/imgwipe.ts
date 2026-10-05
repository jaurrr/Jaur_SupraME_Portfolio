import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';

/**
 * Image block-wipe reveal. Attaches to any `.imgwipe` element EXCEPT the hero
 * plate (`.imgwipe--hero`, which the HeroComponent sweeps on a timer after the
 * preloader lifts, so the wipe is actually seen). Adds `.swept` one-shot when
 * the image scrolls into view.
 */
@Directive({
  selector: '.imgwipe:not(.imgwipe--hero)',
})
export class ImgWipeDirective implements OnInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    const native = this.el.nativeElement;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      this.renderer.addClass(native, 'swept');
      return;
    }
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.renderer.addClass(native, 'swept');
            this.observer?.disconnect();
            this.observer = undefined;
            break;
          }
        }
      },
      { threshold: 0.25 },
    );
    this.observer.observe(native);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}

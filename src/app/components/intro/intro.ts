import { Component, OnDestroy, OnInit, signal } from '@angular/core';

const DURATION = 1650;
const STATUSES: [number, string][] = [
  [0, 'Composing the issue'],
  [35, 'Setting the type'],
  [70, 'Framing the plates'],
  [92, 'Wiping the sections'],
];

/**
 * 0–100 counter preloader with a choreographed clip-wipe exit (ma tone, wipe
 * motion). On completion it adds `body.loaded`, which triggers the hero
 * entrance, and dispatches `juno:hero-entrance` so the hero photo block-wipe
 * runs at the right moment. ~2.6s total.
 */
@Component({
  selector: 'app-intro',
  templateUrl: './intro.html',
  styleUrl: './intro.scss',
})
export class IntroComponent implements OnInit, OnDestroy {
  protected readonly visible = signal(true);
  protected readonly count = signal('000');
  protected readonly progress = signal(0);
  protected readonly status = signal(STATUSES[0][1]);
  protected readonly phase = signal<'counting' | 'exit' | 'gone'>('counting');

  private raf = 0;
  private timers: ReturnType<typeof setTimeout>[] = [];
  private readonly reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  ngOnInit(): void {
    if (this.reduce) {
      this.finish();
      return;
    }
    let start = 0;
    const tick = (ts: number): void => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / DURATION, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.round(eased * 100);
      this.count.set(String(val).padStart(3, '0'));
      this.progress.set(val);
      for (let i = STATUSES.length - 1; i >= 0; i--) {
        if (val >= STATUSES[i][0]) {
          this.status.set(STATUSES[i][1]);
          break;
        }
      }
      if (p < 1) {
        this.raf = requestAnimationFrame(tick);
      } else {
        this.beginExit();
      }
    };
    this.raf = requestAnimationFrame(tick);
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.raf);
    this.timers.forEach(clearTimeout);
  }

  private beginExit(): void {
    this.phase.set('exit'); // ink sweep covers
    this.heroEntrance();
    this.timers.push(setTimeout(() => this.phase.set('gone'), 600)); // wipe up
    this.timers.push(setTimeout(() => this.visible.set(false), 1450));
  }

  /** Fast-path for reduced motion: hero entrance, then remove. */
  private finish(): void {
    this.heroEntrance();
    this.timers.push(setTimeout(() => this.visible.set(false), 400));
  }

  private heroEntrance(): void {
    document.body.classList.add('loaded');
    window.dispatchEvent(new CustomEvent('juno:hero-entrance'));
  }
}

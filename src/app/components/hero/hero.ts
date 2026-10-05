import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { PROFILE } from '../../data/portfolio';
import { RevealDirective } from '../../directives/reveal';
import { TypingComponent } from '../typing/typing';

@Component({
  selector: 'app-hero',
  imports: [RevealDirective, TypingComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent implements OnInit, OnDestroy {
  protected readonly profile = PROFILE;
  /** Tap-to-flip for touch devices (hover handles desktop) */
  protected readonly flipped = signal(false);
  /** Hero plate block-wipe, triggered after the preloader lifts */
  protected readonly swept = signal(false);

  private readonly onEntrance = (): void => {
    window.setTimeout(() => this.swept.set(true), 380);
  };

  ngOnInit(): void {
    window.addEventListener('juno:hero-entrance', this.onEntrance);
    // Safety net: if the event was somehow missed, sweep after a few seconds.
    window.setTimeout(() => this.swept.set(true), 6000);
  }

  ngOnDestroy(): void {
    window.removeEventListener('juno:hero-entrance', this.onEntrance);
  }

  protected toggleFlip(): void {
    this.flipped.update((v) => !v);
  }

  protected go(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Arm motion states (wipes, reveals, block-wipes) before first paint,
// so nothing flashes in its final state before the preloader lifts.
document.documentElement.classList.add('armed');

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

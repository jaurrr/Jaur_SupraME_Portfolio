import { Component } from '@angular/core';
import { SERVICES, SERVICES_IMAGE, SKILL_CATEGORIES } from '../../data/portfolio';
import { ImgWipeDirective } from '../../directives/imgwipe';
import { PanelDirective } from '../../directives/panel';
import { RevealDirective } from '../../directives/reveal';

@Component({
  selector: 'app-skills',
  imports: [RevealDirective, PanelDirective, ImgWipeDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent {
  protected readonly categories = SKILL_CATEGORIES;
  protected readonly services = SERVICES;
  protected readonly servicesImage = SERVICES_IMAGE;
}

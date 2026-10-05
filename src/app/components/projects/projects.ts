import { Component } from '@angular/core';
import { PROJECTS, PROJECTS_IMAGE } from '../../data/portfolio';
import { ImgWipeDirective } from '../../directives/imgwipe';
import { PanelDirective } from '../../directives/panel';
import { RevealDirective } from '../../directives/reveal';

@Component({
  selector: 'app-projects',
  imports: [RevealDirective, PanelDirective, ImgWipeDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  protected readonly projects = PROJECTS;
  protected readonly projectsImage = PROJECTS_IMAGE;
}

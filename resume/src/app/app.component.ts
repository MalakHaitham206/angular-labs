import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { BioSectionComponent } from './bio-section/bio-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { ToDoComponentComponent } from './to-do-component/to-do-component.component';
import { UsersListComponent } from './users-list/users-list.component';

@Component({
  selector: 'app-root',
  imports: [
    HeroSectionComponent,
    BioSectionComponent,
    SkillsSectionComponent,
    PortfolioSectionComponent,
    FooterSectionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Resume Lab1';
}

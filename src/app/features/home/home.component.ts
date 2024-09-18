import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AbouUsComponent } from '../abou-us/abou-us.component';
import { INSIGHTSComponent } from './insights/insights.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { UpdateComponent } from './update/update.component';
import { ShowCaseComponent } from './show-case/show-case.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactUsComponent } from '../../shared/components/contact-us/contact-us.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    AboutUsComponent,
    AbouUsComponent,
    INSIGHTSComponent,
    PortfolioComponent,
    UpdateComponent,
    ShowCaseComponent,
    TestimonialsComponent,
    ContactUsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}

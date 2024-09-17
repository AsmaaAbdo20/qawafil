import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { QawafelButtonComponent } from '../../../shared/components/qawafel-button/qawafel-button.component';
import { RouterLink } from '@angular/router';
import { CountUpModule } from 'ngx-countup';
import { CommonModule } from '@angular/common';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, QawafelButtonComponent, RouterLink, CountUpModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AboutUsComponent {
  @ViewChild('countUp1') countUp1!: any;
  @ViewChild('countUp2') countUp2!: any;
  @ViewChild('countUp3') countUp3!: any;

  startCount = false;

  onElementClick(event: MouseEvent): void {
    const clickedElement = event.target as HTMLElement;
    clickedElement.classList.add('numberAnimstion');
  }
}

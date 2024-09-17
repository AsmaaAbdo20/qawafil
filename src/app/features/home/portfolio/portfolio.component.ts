import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewEncapsulation,
} from '@angular/core';
import { QawafelButtonComponent } from '../../../shared/components/qawafel-button/qawafel-button.component';
import { SwiperOptions } from 'swiper/types';
// import { SwiperOptions } from 'swiper/types';
// import { Pagination } from 'swiper/modules';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, QawafelButtonComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class PortfolioComponent {
  // ngOnInit(): void {
  //   const styleSheet = document.createElement('style');
  //   styleSheet.innerHTML = `.swiper {
  //       .swiper-button-next {
  //         background-color: red;
  //       }
  //     }`;
  //   if (this.shadowRoot) {
  //     this.shadowRoot.appendChild(styleSheet);
  //   }
  // }
  // private get shadowRoot(): ShadowRoot | null {
  //   return (this as any).shadowRoot || null;
  // }
}

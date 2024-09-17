import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwiperContainerComponent } from '../../../shared/components/swiper/swiper-container/swiper-container.component';
import { SwiperSlideComponent } from '../../../shared/components/swiper/swiper-slide/swiper-slide.component';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { register } from 'swiper/element';
import { Navigation, Pagination } from 'swiper/modules';
register();

@Component({
  selector: 'qawafel-testimonials',
  standalone: true,
  imports: [
    SwiperContainerComponent,
    CarouselModule,
    ButtonModule,
    TagModule,
    SwiperSlideComponent,
    CommonModule,
  ],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestimonialsComponent {

}


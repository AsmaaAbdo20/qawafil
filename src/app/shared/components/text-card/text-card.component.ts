import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'qawafel-text-card',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './text-card.component.html',
  styleUrl: './text-card.component.scss',
})
export class TextCardComponent {
  @Input() imgSrc!: string;
  @Input() title!: string;
  @Input() linkbtn!: string;
  @Input() year!: string;
}

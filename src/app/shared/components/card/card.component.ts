import { Component, Input } from '@angular/core';

@Component({
  selector: 'qawafel-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() imgSrc!: string;
  @Input() hover: boolean = false;
}

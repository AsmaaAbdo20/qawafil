import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-qawafel-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './qawafel-button.component.html',
  styleUrl: './qawafel-button.component.scss',
})
export class QawafelButtonComponent {
  @Input() link$!: string;
  @Input() butColors!: string;
}

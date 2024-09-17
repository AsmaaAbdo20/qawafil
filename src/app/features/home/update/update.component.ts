import { Component } from '@angular/core';
import { CardComponent } from "../../../shared/components/card/card.component";
import { QawafelButtonComponent } from "../../../shared/components/qawafel-button/qawafel-button.component";

@Component({
  selector: 'qawafel-update',
  standalone: true,
  imports: [CardComponent, QawafelButtonComponent],
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent {

}

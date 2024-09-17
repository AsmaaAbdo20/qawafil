import { Component } from '@angular/core';
import { QawafelButtonComponent } from "../../../shared/components/qawafel-button/qawafel-button.component";
import { CardComponent } from "../../../shared/components/card/card.component";

@Component({
  selector: 'qawafel-show-case',
  standalone: true,
  imports: [QawafelButtonComponent, CardComponent],
  templateUrl: './show-case.component.html',
  styleUrl: './show-case.component.scss'
})
export class ShowCaseComponent {

}

import { Component } from '@angular/core';
import { QawafelButtonComponent } from "../../../shared/components/qawafel-button/qawafel-button.component";
import { CardComponent } from "../../../shared/components/card/card.component";
import { TextCardComponent } from "../../../shared/components/text-card/text-card.component";

@Component({
  selector: 'app-insights',
  standalone: true,
  imports: [QawafelButtonComponent, CardComponent, TextCardComponent],
  templateUrl: './insights.component.html',
  styleUrl: './insights.component.scss'
})
export class INSIGHTSComponent {

}

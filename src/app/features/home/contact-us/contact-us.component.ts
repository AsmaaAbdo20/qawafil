import { Component, inject } from '@angular/core';
import { BaseComponent } from '../../../shared/components/base/base.component';
import { HttpService } from '../../../core/services/http/http.service';
import { Validators } from '@angular/forms';
import { formsModule } from '../../../shared/components/base/form-modules';
import { CommonModule } from '@angular/common';
import { QawafelButtonComponent } from "../../../shared/components/qawafel-button/qawafel-button.component";

@Component({
  selector: 'qawafel-contact-us',
  standalone: true,
  imports: [CommonModule, ...formsModule, QawafelButtonComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent extends BaseComponent {
  // http = inject(HttpService);
  ngOnInit(): void {
    this.loadForm({
      name: ['', []],
      email: ['', []],
      phone: ['', [Validators.required]],
      message: ['', []],
    });
  }

  override onSubmit(): void {
    if (this.form.invalid) {
      console.log('Form INVALID');
    } else {
      console.log('Success', this.form.value);
    }
    // this.http.post(EndPoints.CONTACTUS, this.form.value).subscribe({
    //   next: () => {
    //     this.form.reset();
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });
  }
}

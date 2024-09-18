import { Component, inject } from '@angular/core';
import { QawafelButtonComponent } from '../qawafel-button/qawafel-button.component';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { formsModule } from '../base/form-modules';

@Component({
  selector: 'qawafel-contact-us',
  standalone: true,
  imports: [QawafelButtonComponent, CommonModule, ...formsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  // http = inject(HttpService);

  formBuilder = inject(FormBuilder);
  form = this.formBuilder.group({
    name: ['', []],
    email: ['', []],
    phone: ['', [Validators.required]],
    message: ['', []],
  });

  validForm!: boolean;
  onSubmit(): void {
    if (this.form.invalid) {
      this.validForm = false;
     
    } else {
      this.validForm = true;
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

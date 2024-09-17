import { Component, inject } from '@angular/core';
import { BaseComponent } from '../../shared/components/base/base.component';
import { Validators } from '@angular/forms';
import { HttpService } from '../../core/services/http/http.service';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent{
  // http = inject(HttpService);
  // ngOnInit(): void {
  //   this.loadForm({
  //     name: ['', []],
  //     emial: ['', []],
  //     phone: ['', [Validators.required]],
  //     message: ['', []],
  //   });
  // }

  // override onSubmit(): void {
  //   if (this.form.invalid) {
  //     alert('Form INVALID');
  //   } else {
  //     alert('Success');
  //     console.log(this.form.value);
  //   }
  //   // this.http.post(EndPoints.CONTACTUS, this.form.value).subscribe({
  //   //   next: () => {
  //   //     this.form.reset();
  //   //   },
  //   //   error: (err) => {
  //   //     console.log(err);
  //   //   },
  //   // });
  // }
}

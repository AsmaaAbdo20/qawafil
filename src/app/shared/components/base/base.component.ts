import { Directive, OnDestroy, inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';

@Directive()
export abstract class BaseComponent implements OnDestroy {
  form!: FormGroup;
  formBuilder = inject(FormBuilder);
  destroy$ = new Subject<void>();
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();   
  }

  loadForm(controlls: {}) {
    this.form = this.formBuilder.group(controlls);
  }
  abstract onSubmit(): void;
}

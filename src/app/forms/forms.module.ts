import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FullNameComponent } from './full-name/full-name.component';

@NgModule({
  declarations: [ReactiveFormComponent, FullNameComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class FormsModule { }

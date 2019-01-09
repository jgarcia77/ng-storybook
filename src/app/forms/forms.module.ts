import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FullNameComponent } from './full-name/full-name.component';
import { AddressComponent } from './address/address.component';
import { AliasesComponent } from './aliases/aliases.component';

@NgModule({
  declarations: [ReactiveFormComponent, FullNameComponent, AddressComponent, AliasesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class FormsModule { }

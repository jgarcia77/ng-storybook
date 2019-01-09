import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-full-name',
  templateUrl: './full-name.component.html',
  styleUrls: ['./full-name.component.sass']
})
export class FullNameComponent implements OnInit {
  @Output()
  submit: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  form = this.fb.group({
    firstName: ['', [Validators.required, Validators.maxLength(20)]],
    lastName: ['', [Validators.required, Validators.maxLength(20)]],
    address: this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required]
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  public onSubmit() {
    this.submit.emit(this.form);
  }

  public get aliases() {
    return this.form.get('aliases') as FormArray
  }

  public addAlias() {
    this.aliases.push(this.fb.control(''));
  }
}

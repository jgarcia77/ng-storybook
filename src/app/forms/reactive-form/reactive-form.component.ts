import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.sass']
})
export class ReactiveFormComponent implements OnInit {
  @Output()
  submit: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  form = this.fb.group({
    aliases: this.fb.array([])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() { }

  public handleSubmit() {
    this.submit.emit(this.form);
  }
}

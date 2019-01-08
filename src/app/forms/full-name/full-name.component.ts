import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-full-name',
  templateUrl: './full-name.component.html',
  styleUrls: ['./full-name.component.sass']
})
export class FullNameComponent implements OnInit {
  @Output()
  submit: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  form = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(20)])
  });

  constructor() { }

  ngOnInit() {
  }

  public onSubmit() {
    this.submit.emit(this.form);
  }
}

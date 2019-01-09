import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-aliases',
  templateUrl: './aliases.component.html',
  styleUrls: ['./aliases.component.sass']
})
export class AliasesComponent implements OnInit {
  @Input()
  aliases: FormArray;

  @Output()
  aliasesChange: EventEmitter<FormArray> = new EventEmitter<FormArray>();

  aliasesForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() { 
    this.aliasesForm = this.fb.group({
      items: this.aliases
    });
  }

  public addAlias() {
    this.aliases.push(this.fb.control(''));
    this.aliasesChange.emit(this.aliases);
  }

  public handleChange() {
    this.aliasesChange.emit(this.aliases);
  }
}
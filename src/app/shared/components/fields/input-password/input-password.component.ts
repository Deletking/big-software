import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidationFieldsService } from 'src/app/shared/services/validation-fields.service';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss']
})
export class InputPasswordComponent {
  hide = true;
  @Input() title!: string;
  @Input() formGroup!: FormGroup;
  @Input() controlName!: string;

  constructor(public validation: ValidationFieldsService) { }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }
}

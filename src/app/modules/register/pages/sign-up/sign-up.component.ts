import { ValidationFieldsService } from './../../../../shared/services/validation-fields.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  hide = true;
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public validation: ValidationFieldsService,
  ) {
    this.signupForm = this.fb.group({
      username: ['', Validators.compose([Validators.minLength(2), Validators.maxLength(25), Validators.required]) ],
      email: ['',  Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]) ]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
     console.log(this.signupForm.value);
  }
}

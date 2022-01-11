import { ValidationFieldsService } from './../../../../shared/services/validation-fields.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  isLoading = false;
  hide = true;
  signupForm: FormGroup;
  image = 'https://images.unsplash.com/photo-1639565770091-55e1de87e749?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80 987w';
  
  constructor(
    private fb: FormBuilder
  ) {
    this.signupForm = this.fb.group({
      username: ['', Validators.compose([ Validators.required, Validators.minLength(2), Validators.maxLength(25) ]) ],
      email: ['',  Validators.compose([ Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$') ])],
      password: ['', Validators.compose([Validators.required ]) ]
      // password: ['', Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}') ]) ]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.isLoading = true
    if(this.signupForm.invalid) {
      return;
    }
    console.log(this.signupForm.value);
    setTimeout(() => {
      this.isLoading = false
    }, 500000);
  }
}

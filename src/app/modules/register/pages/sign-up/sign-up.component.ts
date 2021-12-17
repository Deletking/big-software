import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  hide = true;
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.signupForm = this.fb.group({
      username: ['', Validators.compose([Validators.minLength(2), Validators.required]) ],
      email: ['',  Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    })
    this.signupForm.controls['username'].valueChanges.subscribe( (value) => console.log(value))
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // console.log(this.signupForm.value);
  }
}

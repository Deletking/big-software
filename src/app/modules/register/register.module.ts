import { SharedModule } from './../../shared/shared.module';
import { AngularMaterialModule } from './../../angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterComponent,
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class RegisterModule { }

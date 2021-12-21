import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './../angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent, InputPasswordComponent } from './components/fields';
@NgModule({
  declarations: [
    InputTextComponent,
    InputPasswordComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    InputTextComponent,
    InputPasswordComponent
  ]
})
export class SharedModule { }

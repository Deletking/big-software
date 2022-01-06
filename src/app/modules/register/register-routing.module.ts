import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { RegisterComponent } from './register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    children: [
      {
        path: 'sign-up',
        component: SignUpComponent
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/register/sign-up'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'register',
    loadChildren: () =>
      import('../app/modules/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/register/sign-up'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

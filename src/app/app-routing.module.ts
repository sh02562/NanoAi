import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginCallbackComponent } from './auth/login-callback/login-callback.component';

const routes: Routes = [
  { path: '', pathMatch: 'full' ,component: SignUpComponent},
  { path: 'signin', component: SignInComponent },
  { path: 'login-callback', component: LoginCallbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

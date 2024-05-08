import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginSuccessComponent } from './login/login-success/login-success.component'; // Import LoginSuccessComponent

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login-success', component: LoginSuccessComponent }, // Define login success route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

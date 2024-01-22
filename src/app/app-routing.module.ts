import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { ConfirmedMailComponent } from './auth/confirmed-mail/confirmed-mail.component';
import { DashbordComponent } from './_dashbord/dashbord/dashbord.component';



const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'confirmation-email/:confirmationHash', component: ConfirmedMailComponent },
  { path: 'dashboard/:userId', component: DashbordComponent },


  // { path : '404', component: },
  { path: '**', redirectTo: '404' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjcsImxvZ2luIjoiaGF2cmV6LmNocmlzdG9waGVyQG91dGxvb2suY29tIiwicm9sZSI6InV0aWxpc2F0ZXVyIiwiaWF0IjoxNzA1ODYzODM5LCJleHAiOjE3MDU5NTAyMzl9.Vi0yk5IQU_iEaq0gpQNVMoxHbv_hNQUusxNU2cefEfA",

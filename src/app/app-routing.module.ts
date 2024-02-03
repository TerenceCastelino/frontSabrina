import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { ConfirmedMailComponent } from './auth/confirmed-mail/confirmed-mail.component';
import { DashbordComponent } from './_dashbord/dashbord.component';
import { AuthGuard } from './_shared/_guarde/auth-guard.guard';
import { ResetPasswordComponent } from './auth/reset-passeword/reset-passeword.component';
import { EnvoisMailPasswordComponent } from './auth/envois-mail-password/envois-mail-password.component';
import { AdminDashboardComponent } from './adminDashboard/admin-dashboard/admin-dashboard.component';
import { Model1Component } from './modelTiny/model1/model1.component';
import { Model2Component } from './modelTiny/model2/model2.component';
import { ReservationComponent } from './_reservation/reservation/reservation.component';



const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'confirmation-email/:confirmationHash', component: ConfirmedMailComponent },
  { path: 'dashboard/user/:userId', component: DashbordComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/admin/:userId', component: AdminDashboardComponent, canActivate: [AuthGuard] },
  { path: 'resetPassword', component: EnvoisMailPasswordComponent },
  { path: 'resetPassword/:urlResetPasswordHash', component: ResetPasswordComponent },
  { path: 'modelOne', component: Model1Component },
  { path: 'modelTwo', component: Model2Component },
  { path: 'reservation', component: ReservationComponent, canActivate: [AuthGuard] },


  // { path : '404', component: },
  { path: '**', redirectTo: '404' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjcsImxvZ2luIjoiaGF2cmV6LmNocmlzdG9waGVyQG91dGxvb2suY29tIiwicm9sZSI6InV0aWxpc2F0ZXVyIiwiaWF0IjoxNzA1ODYzODM5LCJleHAiOjE3MDU5NTAyMzl9.Vi0yk5IQU_iEaq0gpQNVMoxHbv_hNQUusxNU2cefEfA",

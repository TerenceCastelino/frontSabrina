import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { ConfirmedMailComponent } from './auth/confirmed-mail/confirmed-mail.component';
import { NavbarComponent } from './playout/navbar/navbar.component';
import { FooterComponent } from './playout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashbordComponent } from './_dashbord/dashbord.component';
// Importez le service TokenService
import { TokenService } from './_shared/_service/jwt.service'; // Assurez-vous que le chemin est correct
// Importez l'interceptor TokenInterceptor
import { TokenInterceptor } from './_shared/_interceptor/token.interceptor';
import { ResetPasswordComponent } from './auth/reset-passeword/reset-passeword.component';
import { EnvoisMailPasswordComponent } from './auth/envois-mail-password/envois-mail-password.component'; // Assurez-vous que le chemin est correct



@NgModule({
  declarations: [
    AppComponent,
    ConfirmedMailComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    DashbordComponent,
    ResetPasswordComponent,
    EnvoisMailPasswordComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,




  ],
  providers: [// Enregistrez le service TokenService
    TokenService,

    // Enregistrez l'interceptor pour toutes les requêtes sortantes
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }

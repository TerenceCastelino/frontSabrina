import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { ConfirmedMailComponent } from './auth/confirmed-mail/confirmed-mail.component';
import { NavbarComponent } from './playout/navbar/navbar.component';
import { FooterComponent } from './playout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './auth/register/register.component';
import { AttendeConfirmationMailComponent } from './auth/register/attende-confirmation-mail/attende-confirmation-mail.component';





@NgModule({
  declarations: [
    AppComponent,
    ConfirmedMailComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    AttendeConfirmationMailComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

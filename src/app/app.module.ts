import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { EmailComponent } from './email/email.component';
import { AuthService } from './auth.service';

import { HttpClientModule } from '@angular/common/http';
import { ZonapublicaComponent } from './zonapublica/zonapublica.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';


 const firebaseConfig = {
    apiKey: 'AIzaSyA9Hyi4cfk_TKSEsVpgBK0CPsJjOjjq7Ro',
    authDomain: 'authangular5.firebaseapp.com',
    databaseURL: 'https://authangular5.firebaseio.com',
    projectId: 'authangular5',
    storageBucket: 'authangular5.appspot.com',
    messagingSenderId: '759418522510'
  };

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    EmailComponent,
    ZonapublicaComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
   {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthService,
            multi: true,
     }
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }

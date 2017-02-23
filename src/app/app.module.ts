import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeModule} from './welcome/welcome.module';
import { AppComponent } from './app.component';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

const myFirebaseConfig = {
    apiKey: "AIzaSyBc-5CexKJ6FfEIubghIi1ivWgaUlnx08o",
    authDomain: "ticket-temp-booking.firebaseapp.com",
    databaseURL: "https://ticket-temp-booking.firebaseio.com",
    storageBucket: "ticket-temp-booking.appspot.com",
    messagingSenderId: "275086311192"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

import { PageNotFoundComponent }   from './not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    WelcomeModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig)   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
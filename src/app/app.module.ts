import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeModule} from './welcome/welcome.module';
import { AppComponent } from './app.component';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

const myFirebaseConfig = {
    apiKey: "AIzaSyDxkAHVgwFPYKZpeK_CkJirmzwf3xEYqgw",
    authDomain: "get-my-tickets.firebaseapp.com",
    databaseURL: "https://get-my-tickets.firebaseio.com",
    storageBucket: "get-my-tickets.appspot.com",
    messagingSenderId: "887081551176"
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
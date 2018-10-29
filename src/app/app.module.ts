import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { theMasterFirebaseConfig } from './api-keys';

export const firebaseConfig = {
  apiKey: theMasterFirebaseConfig.apiKey,
  authDomain: theMasterFirebaseConfig.authDomain,
  databaseURL: theMasterFirebaseConfig.databaseURL,
  storageBucket: theMasterFirebaseConfig.storageBucket
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

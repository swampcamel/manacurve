import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import {ScrollingModule} from '@angular/cdk/scrolling';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeckBuilderComponent } from './deck-builder/deck-builder/deck-builder.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import { theMasterFirebaseConfig } from './api-keys';

import { CardFilterPipe } from './card-filter.pipe'

export const firebaseConfig = {
  apiKey: theMasterFirebaseConfig.apiKey,
  authDomain: theMasterFirebaseConfig.authDomain,
  databaseURL: theMasterFirebaseConfig.databaseURL,
  storageBucket: theMasterFirebaseConfig.storageBucket
}

@NgModule({
  declarations: [
    AppComponent,
    DeckBuilderComponent,
    WelcomeComponent,
    CardFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    ScrollingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

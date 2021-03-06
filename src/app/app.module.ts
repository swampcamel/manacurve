import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { FormsModule } from '@angular/forms';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { DeckBuilderComponent } from './deck-builder/deck-builder/deck-builder.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';

import { theMasterFirebaseConfig } from './api-keys';

import { CardFilterPipe } from './card-filter.pipe';

import { DeckViewerComponent } from './deck-viewer/deck-viewer.component'

import { CardDetailComponent } from './deck-builder/deck-builder/card-detail/card-detail.component'

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
    CardFilterPipe,
    DeckViewerComponent,
    CardDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    ScrollingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  keys;
  decks: AngularFireList<any>;
  constructor(private database: AngularFireDatabase) {
    this.decks = database.list('DECKS');
    this.keys = this.decks.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val()}))
    })
  }

  getDecks() {
    return this.keys;
  }
}

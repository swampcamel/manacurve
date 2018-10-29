import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  keys;
  decks;
  cardKey;
  mtg: AngularFireList<any>;
  constructor(private database: AngularFireDatabase) {
    this.mtg = database.list('GRN/cards');
    this.decks = database.list('DECKS');
    this.keys = this.mtg.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val()}))
    })
  }

getCards() {
  return this.keys;
}

getCardById(key) {
  return this.database.object('GRN/cards/'+ key).valueChanges()
}

addDeck(deck) {
  this.decks.push(deck);
  console.log(this.decks);
}

}

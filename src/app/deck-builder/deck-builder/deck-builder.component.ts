import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

@Component({
  selector: 'app-deck-builder',
  templateUrl: './deck-builder.component.html',
  styleUrls: ['./deck-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeckBuilderComponent implements OnInit {
  cards = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  constructor() { }
  newDeck = [];
  ngOnInit() {
  }

  addCardToDeck(card){
    this.newDeck.push(card);
  }

  removeCardFromDeck(card){
    for( var i = 0; i < this.newDeck.length-1; i++){
      if(this.newDeck[i] === card) {
        this.newDeck.splice(i, 1);
        break;
      }
    }
  }
}

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
    this.newDeck.forEach((item, index) => {
      if(item === card) {
        this.newDeck[index].splice(index, 1);
      }
    })
  }
}

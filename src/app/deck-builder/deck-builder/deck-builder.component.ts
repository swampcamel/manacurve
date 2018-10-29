import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CardService } from '../../card.service';

@Component({
  selector: 'app-deck-builder',
  templateUrl: './deck-builder.component.html',
  styleUrls: ['./deck-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CardService]
})

export class DeckBuilderComponent implements OnInit {
  cards = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  newDeck = [];

  constructor(private cardService: CardService) { }


  ngOnInit() {
    console.log('cards are: ' + this.cardService.getCards()); //take this out; this is for testing
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

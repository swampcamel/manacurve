import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CardService } from '../../card.service';
import { Deck } from '../../models/deck.model';

@Component({
  selector: 'app-deck-builder',
  templateUrl: './deck-builder.component.html',
  styleUrls: ['./deck-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CardService]
})

export class DeckBuilderComponent implements OnInit {
  cards;
  newDeck = [];

  constructor(private cardService: CardService) { }


  ngOnInit() {
    this.cards = this.cardService.getCards();
  }

  addCardToDeck(card){
    if (this.newDeck.length <= 40) {
    this.newDeck.push(card);
    console.log(this.newDeck[0].colors)
    } else {
      alert("Deck Full!")
    }
  }

  removeCardFromDeck(card){
    for( var i = 0; i < this.newDeck.length; i++){
      if(this.newDeck[i] === card) {
        this.newDeck.splice(i, 1);
        break;
      }
    }
  }

  sendDeck(title: string) {
    let newDeck: Deck = new Deck(title, this.newDeck);
  }
}

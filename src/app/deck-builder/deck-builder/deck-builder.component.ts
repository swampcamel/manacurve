import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CardService } from '../../card.service';
import { Deck } from '../../models/deck.model';
import {AngularFireObject} from '@angular/fire/database'

@Component({
  selector: 'app-deck-builder',
  templateUrl: './deck-builder.component.html',
  styleUrls: ['./deck-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CardService]
})

export class DeckBuilderComponent implements OnInit {
  cards;
  filterGroup: {
    colors: [];
    type: string;
  };
  newDeck = [];

  constructor(private cardService: CardService) { }


  ngOnInit() {
    // this.cardService.getCards().subscribe(data => {
    //   this.cards = Object.values(data)
    //   console.log(this.cards)
    //   console.log(typeof this.cards)
    //   console.log(data)
    //   console.log(typeof data)
    // });

    this.cards = this.cardService.getCards()
  }

  addCardToDeck(card){
    if (this.newDeck.length <= 40) {
    this.newDeck.push(card);
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
    this.cardService.addDeck(newDeck);
  }

  // filterByColor() {
  //     // If this.FilteredCards = null, then this.cards = this.filteredCards; What if they filter down to none?
  //
  //   this.filteredCards = this.cards;
  //   for (let i = 0; i <= this.filteredCards.length; i++) {
  //     console.log([i])
  //     console.log(this.newDeck[0].colors)
  //     console.log("Anything")
  //   };
  // }

}

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
  filterGroup;
  newDeck = [];

  constructor(private cardService: CardService) { }


  ngOnInit() {

    this.cards = this.cardService.getCards()
    this.filterGroup = {
      Rarities: [
        {name: "Common", value: true},
        {name:"Uncommon", value: true},
        {name:"Rare", value: true},
        {name:"Mythic Rare", value: true}
      ],
      Colors: [
        {name: "White", value: true}
      ],
      Types: [
        {name: "Creature", value: true},
        {name: "Enchantment", value: true},
        {name: "Instant", value: true},
        {name: "Equipment", value: true},
        {name: "Land", value: true},
        {name: "Planeswalker", value: true},
        {name: "Sorcery", value: true},
        {name: "Artifact", value: true}
      ]
    }
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

  changeType(eventTarget) {
    if(eventTarget.checked) {
      this.filterGroup.Types.forEach(type => {
        if(type.name == eventTarget.name) {
          type.value = true;
        }
      })
    } else {
      this.filterGroup.Types.forEach(type => {
        if(type.name == eventTarget.name) {
          type.value = false;
        }
      })
    }
  }

  changeRarity(eventTarget) {
    if(eventTarget.checked) {
      this.filterGroup.Rarities.forEach(type => {
        if(type.name == eventTarget.name) {
          type.value = true;
        }
      })
    } else {
      this.filterGroup.Rarities.forEach(type => {
        if(type.name == eventTarget.name) {
          type.value = false;
        }
      })
    }
  }
}

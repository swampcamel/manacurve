import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { DeckService } from '../deck.service';
import { CardDetailComponent } from '../deck-builder/deck-builder/card-detail/card-detail.component';
import {AngularFireObject} from '@angular/fire/database';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-deck-viewer',
  templateUrl: './deck-viewer.component.html',
  styleUrls: ['./deck-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DeckService]
})
export class DeckViewerComponent implements OnInit {
  decks;
  currentDeck;
  currentCard;

  constructor(private deckService: DeckService) { }

  ngOnInit() {
    this.decks = this.deckService.getDecks();
    console.log(this.decks)
  }

  showCardsInDeck(deck){
    this.currentDeck = deck;
    console.log(this.currentDeck)
    console.log(typeof this.currentDeck)
  }

  initiateDeckDeletion(deckToDelete) {
    if (confirm("Do you REEEEEEALLY want to delete this deck?")) {
      this.deckService.deleteDeck(deckToDelete);
    }
  }

  selectCardFromDeck(card) {
    this.currentCard = card;
  }

}

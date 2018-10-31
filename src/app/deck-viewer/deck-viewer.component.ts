import { Component, OnInit } from '@angular/core';
import { DeckService } from '../deck.service';

@Component({
  selector: 'app-deck-viewer',
  templateUrl: './deck-viewer.component.html',
  styleUrls: ['./deck-viewer.component.scss'],
  providers: [DeckService]
})
export class DeckViewerComponent implements OnInit {
  decks;
  currentDeck;

  constructor(private deckService: DeckService) { }

  ngOnInit() {
    this.decks = this.deckService.getDecks();
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

}

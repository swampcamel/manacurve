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

  constructor(private deckService: DeckService) { }

  ngOnInit() {
    this.decks = this.deckService.getDecks();
  }

  showCardsInDeck(){
    
  }

}

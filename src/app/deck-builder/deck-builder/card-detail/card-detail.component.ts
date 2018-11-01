import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent {
  @Input() selectedCard;
  constructor() { }

  testForColor(card) {
    if(card.colors == undefined) {
      return "Grey";
    } else {
      return card.colors[0];
    }
  }

  translateMana(card) {
    let splitMana = card.manaCost.split('');
    splitMana = splitMana.filter(function(value) {
      if(value != "{" && value !="}") {
        return value;
      }
    })
    return splitMana;
  }

  testForRarity(rarity) {
  let returnedRarity =  rarity.split(" ").join("-");
  return returnedRarity;
  }
}

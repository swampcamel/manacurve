import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {
  @Input() selectedCard;
  manaToDisplay;
  constructor() { }

  ngOnInit() {
    if(this.selectedCard){
    this.translateMana(this.selectedCard)}
  }

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
    this.manaToDisplay = splitMana;
  }

}

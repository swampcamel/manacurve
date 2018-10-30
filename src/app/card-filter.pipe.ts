import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs'
import { filter, map } from 'rxjs/operators';
import { pipe } from 'rxjs'

@Pipe({name: 'cardFilter', pure: false})
export class CardFilterPipe implements PipeTransform {
  output;
  transform(cardList, filterGroup) {
    if (cardList) {
      console.log(filterGroup)
      this.output = cardList.filter(card => {
        if (card.rarity){
          if (filterGroup.rarity == card.rarity) {
            return card
          }}
        })

        console.log(this.output)
        return this.output;
      }
    }
  }

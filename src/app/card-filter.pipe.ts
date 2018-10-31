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
      console.log(filterGroup.Rarities[0].value)
      this.output = cardList.filter(card => {
        if (card.rarity){
          for (let i = 0; i < filterGroup.Rarities.length; i++)
          // filterGroup.Rarities.forEach(rarity =>
            {
            if(filterGroup.Rarities[i].value === true && filterGroup.Rarities[i].name == card.rarity){
              console.log("test")
          // if (filterGroup.rarity == card.rarity) {
            return card
          }
        }
      }})

        console.log(this.output)
        return this.output;
      }
    }
  }

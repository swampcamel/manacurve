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
        if(card.types) {
          for (let i=0; i < filterGroup.Types.length; i++) {
            for (let j=0; j < card.types.length; j++) {
              if (filterGroup.Types[i].value === true && filterGroup.Types[i].name == card.types[j]) {
                if (card.rarity){
                  for (let i = 0; i < filterGroup.Rarities.length; i++)
                  {
                    if(filterGroup.Rarities[i].value === true && filterGroup.Rarities[i].name == card.rarity){
                      return card
                    }
                  }
                }
              }
            }
          }
        }
      }
    )

    console.log(this.output)
    return this.output;
  }
}
}

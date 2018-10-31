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
          // Types
          for (let i=0; i < filterGroup.Types.length; i++) {
            for (let j=0; j < card.types.length; j++) {
              if (filterGroup.Types[i].value === true && filterGroup.Types[i].name == card.types[j]) {
                // Then Rarities
                if (card.rarity){
                  for (let i = 0; i < filterGroup.Rarities.length; i++) {
                    if(filterGroup.Rarities[i].value === true && filterGroup.Rarities[i].name == card.rarity){
                      // Then CMC
                      if(card.cmc) {
                        for(let i= 0; i < filterGroup.cmc.length; i++) {
                          if((filterGroup.cmc[i].amount == card.cmc && filterGroup.cmc[i].value === true) || (filterGroup.cmc[i].amount == 7 && card.cmc >= 7 && filterGroup.cmc[i].value === true)) {
                            // Then Colors
                            if(!card.colors && filterGroup.Colors[filterGroup.Colors.length-1].value == true) {
                              return card;
                            }
                            else if(card.colors){
                              for (let i=0; i < filterGroup.Colors.length; i++) {
                                for (let j=0; j < card.colors.length; j++) {
                                  if (filterGroup.Colors[i].value === true && filterGroup.Colors[i].name == card.colors[j]) {
                                    return card;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
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

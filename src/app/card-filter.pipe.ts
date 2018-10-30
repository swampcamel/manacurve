import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs'
import { filter, map } from 'rxjs/operators';
import { pipe } from 'rxjs'

@Pipe({name: 'cardFilter'})
export class CardFilterPipe implements PipeTransform {
  output;
  transform(cardList) {
    if (cardList) {
      this.output = cardList.filter(card => {
        if (card.colors){

          if (card.colors.includes("White")) {

            return card
          }}
        })

        console.log(this.output)
        return this.output;
      }
    }
  }

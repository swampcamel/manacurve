export class Deck {

  deckLength: number;
  colorScheme;

  constructor(public title: string, public cards: any[]) {
    this.deckLength = this.cards.length;
    this.cards.forEach(card => {
      let currentCardColors = card.colors;
      currentCardColors.forEach(color => {
        if (this.colorScheme.includes(color)) {
          console.log(`it's a ${color} we won't use!`);
        } else {
          this.colorScheme.push(color);
        }
      });
    });
  }
}

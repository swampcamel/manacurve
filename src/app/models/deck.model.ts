export class Deck {

  deckLength: number;
  colorScheme: any[] = [];

  constructor(public title: string, public cardArray: any[]) {
    this.title = title;
    this.deckLength = this.cardArray.length;
    this.cardArray.forEach(card => {
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

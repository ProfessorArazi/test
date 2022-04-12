export class Player {
  constructor(fn) {
    this.fn = fn;
    this.wins = 0;
    this.losts = 0;
    this.games = 0;
    this.cards = [];
    this.points = 0;
  }

  getCards() {
    const playerCards = [];
    this.cards = playerCards;
  }

  addPoint() {
    this.points++;
  }

  addWin() {
    this.wins++;
  }

  addLost() {
    this.losts++;
  }

  removeCard() {
    this.cards.shift();
  }

  again() {
    this.points = 0;

    this.getCards();
  }
}

export class Computer {
  constructor() {
    this.cards = [];
    this.points = 0;
  }
  getCards() {
    this.cards = [];
  }
  addPoint() {
    this.points++;
  }
  removeCard() {
    this.cards.shift();
  }
  again() {
    this.points = 0;
    this.getCards();
  }
}

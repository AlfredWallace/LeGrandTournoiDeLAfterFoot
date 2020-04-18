export class Player {
  constructor(name, rank) {
    this.name = name;
    this.rank = rank;
  }
}

export class Side {
  constructor(player, score) {
    this.player = player;
    this.score = score;
  }
}

export class Match {
  constructor(order, date, home, away) {
    this.order = order;
    this.date = date;
    this.home = home;
    this.away = away;
  }
}

export class Round {
  constructor(title, matches) {
    this.title = title;
    this.matches = matches;
  }
}

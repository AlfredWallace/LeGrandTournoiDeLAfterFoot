export class Player {
  constructor(firstName, lastName, rank) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.name = firstName + " " + lastName;
    this.shortName = firstName.charAt(0) + ". " + lastName;
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
  constructor(round, order, date, home, away, summary) {
    this.round = round;
    this.order = order;
    this.date = date;
    this.readableDate = formatDate(date);
    this.home = home;
    this.away = away;
    this.summary = summary;
  }
}

export class Round {
  constructor(title, matches) {
    this.title = title;
    this.matches = matches;
  }
}

function formatDate(date) {
  if (!date || date.length === 0) {
    return "";
  }

  const day = date.getDate();
  if (day === 1) {
    return (
      "1er " +
      date.toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long"
      })
    );
  } else {
    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
}

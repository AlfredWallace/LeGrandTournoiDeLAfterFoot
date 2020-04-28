export class Team {
  constructor(name, shortName, rank) {
    this.name = name;
    this.shortName = shortName;
    this.rank = rank;
  }
}

export class Side {
  constructor(team, score) {
    this.team = team;
    this.score = score;
  }
}

export class Match {
  constructor(round, order, legOrder, date, home, away, summary) {
    this.round = round;
    this.order = order;
    this.legOrder = legOrder;
    this.date = date;
    this.readableDate = formatDate(date);
    this.home = home;
    this.away = away;
    this.summary = summary;
  }
}

export class Round {
  constructor(title, matches, legged) {
    this.title = title;
    this.matches = matches;
    this.legged = legged;
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

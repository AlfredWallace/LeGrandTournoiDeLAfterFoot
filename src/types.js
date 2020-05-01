export const CONFRONTATION_TYPE_SINGLE = "single";
export const CONFRONTATION_TYPE_LEG = "leg";
export const CONFRONTATION_TYPE_PLAYOFF = "playoff";

export function Team(name, shortName, rank) {
  this.name = name;
  this.shortName = shortName;
  this.rank = rank;
}

export function Side(team, score) {
  this.team = team;
  this.score = score;
}

export function Match(date, home, away, summary) {
  this.date = date;
  this.readableDate = formatDate(date);
  this.home = home;
  this.away = away;
  this.summary = summary;
}

export function LeggedMatchGroup(matchA, matchB) {
  this.matchA = matchA;
  this.matchB = matchB;
}

export function PlayOffMatchGroup(matches) {
  this.matches = matches;
}

export function Round(title, confrontationsType, confrontations) {
  this.title = title;
  this.confrontationsType = confrontationsType;
  this.confrontations = confrontations;
}

export class MatchOld {
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

import Law from "../Law";
import Decision from "../Decision";
import Parliament from "../Parliament";
import Politician from "../Politician";
import People from "../People";
import { User } from "./User";
import { FakeUser } from "./FakeUser";

// 1 parliament
let parliament = new Parliament(1, "Bundesrepublic", 300, 1);

// 2 parliamentary new law
let law = new Law(
  1,
  "Should there be a carbon tax on cars?",
  new Date(),
  new Date(),
  true
);

// 3 politician
let politician = new Politician(1, "Santi Pornavalai", 25, true, "Afd");

// 4 peoples vote/decision
let people = new People(1, 75.5, 67.2, true);

// 5 individual user
let currentUser = new User(1, "lisa axford", 55, 1);

// 6 decision from a single person
let decision = new Decision(1, true, 1, 1, 1);

// 7 fake user
let fakeUser = new FakeUser(1);

console.log(fakeUser);
google;
const politicianDecision = (politician: Politician, law: Law): void => {
  const name = politician.name;
  const decision = politician.decision;
  const party = politician.party;
  const lawTitle = law.title;
  let decisionText = "disagreed";

  if (decision) {
    let decisionText = "agreed";
  }

  console.log(`
    Law Title: ${lawTitle}
    The politician: ${name}, working with the party ${party} gave the decision: ${decisionText}
    `);
};

politicianDecision(politician, law);

import axios from "axios";
import { Law } from "./src/models/Law";
import { Decision } from "./src/models/Decision";
import { Parliament } from "./src/models/Parliament";
import { Politician } from "./src/models/Politician";
import { People } from "./src/models/People";
import { User } from "./src/models/User";
import { CustomMap } from "./src/models/CustomMap";

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
let politician = new Politician(
  1,
  "Santi Pornavalai",
  25,
  true,
  "Afd",
  13.4930915,
  52.4930915
);

// 4 peoples vote/decision
let people = new People(1, 75.5, 67.2, true);

// 5 individual user
let userLocation = {
  lat: 52.5137715,
  lng: 13.4930915,
};
let userProperties = {
  name: "lisa axford",
  age: 55,
};

// const user = new User(userProperties, 4, userLocation.lat, userLocation.lng);
const user = User.buildUser(userProperties);

// let me = new User(
//   { name: "daniel axford", age: 31 },
//   1,
//   userLocation.lat,
//   userLocation.lng
// );

// 6 decision from a single person
let decision = new Decision(1, true, 1, 1, 1);

// 7 fake user
let addRandom = document.getElementById("addRandom");
let fakeUserProps = User.fake();
let fakeUser = User.buildUser(fakeUserProps);
addRandom.addEventListener("click", () => {
  fakeUser.save();
});

fakeUser.on("save", () => {
  document.getElementById("editable").innerHTML = "Another deep fake";
});

fakeUser.on("error", () => {
  document.getElementById("editable").innerHTML = "Dun fucked up fakey";
});

// consoles

// 8 google map
// const map = new CustomMap("map", lat, lng);
// map.addMarker(user);
// map.addMarker(politician);
// map.addMarker(fakeUser);

// 9 button clicks
let save = document.getElementById("save");
save.addEventListener("click", () => {
  user.save();
});

user.on("save", () => {
  document.getElementById("editable").innerHTML = "Hello World";
});

user.on("error", () => {
  document.getElementById("editable").innerHTML = "Dun fucked up really";
});

const politicianDecision = (politician: Politician, law: Law): string => {
  const name = politician.name;
  const decision = politician.decision;
  const party = politician.party;
  const lawTitle = law.title;
  let decisionText = "disagreed";

  if (decision) {
    let decisionText = "agreed";
  }

  let text = `
    Law Title: ${lawTitle}
    The politician: ${name}, working with the party ${party} gave the decision: ${decisionText}
    `;

  return text;
};

let politicianText = politicianDecision(politician, law);

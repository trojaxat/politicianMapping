"use strict";
exports.__esModule = true;
var Law_1 = require("../Law");
var Decision_1 = require("../Decision");
var Parliament_1 = require("../Parliament");
var Politician_1 = require("../Politician");
var People_1 = require("../People");
var User_1 = require("../User");
// 1 parliament
var parliament = new Parliament_1["default"](1, "Bundesrepublic", 300, 1);
// 2 parliamentary new law
var law = new Law_1["default"](
  1,
  "Should there be a carbon tax on cars?",
  new Date(),
  new Date(),
  true
);
// 3 politician
var politician = new Politician_1["default"](
  1,
  "Santi Pornavalai",
  25,
  true,
  "Afd"
);
// 4 peoples vote/decision
var people = new People_1["default"](1, 75.5, 67.2, true);
// 5 individual user
var currentUser = new User_1["default"](1, "lisa axford", 55, 1);
// 6 decision from a single person
var decision = new Decision_1["default"](1, true, 1, 1, 1);
var politicianDecision = function (politician, law) {
  var name = politician.name;
  var decision = politician.decision;
  var party = politician.party;
  var lawTitle = law.title;
  var decisionText = "disagreed";
  if (decision) {
    var decisionText_1 = "agreed";
  }
  console.log(
    "\n    Law Title: " +
      lawTitle +
      "\n    The politician: " +
      name +
      ", working with the party " +
      party +
      " gave the decision: " +
      decisionText +
      "\n    "
  );
};
politicianDecision(politician, law);

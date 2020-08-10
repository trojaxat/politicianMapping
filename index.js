"use strict";
exports.__esModule = true;
var Decision_1 = require("./src/models/Decision");
var Law_1 = require("./src/models/Law");
var Parliament_1 = require("./src/models/Parliament");
var Politician_1 = require("./src/models/Politician");
var People_1 = require("./src/models/People");
var User_1 = require("./src/models/User");
var UserEdit_1 = require("./src/views/UserEdit");
var UserList_1 = require("./src/views/UserList");
// 1 parliament
var parliament = new Parliament_1.Parliament(1, "Bundesrepublic", 300, 1);
// 2 parliamentary new law
var law = new Law_1.Law(
  1,
  "Should there be a carbon tax on cars?",
  new Date(),
  new Date(),
  true
);
// 3 politician
var politician = new Politician_1.Politician(
  1,
  "Santi Pornavalai",
  25,
  true,
  "Afd",
  13.4930915,
  52.4930915
);
// 4 peoples vote/decision
var people = new People_1.People(1, 75.5, 67.2, true);
// 5 individual user
var userLocation = {
  lat: 52.5137715,
  lng: 13.4930915,
};
var userProperties = {
  name: "lisa axford",
  age: 55,
};
var user = User_1.User.buildUser(userProperties);
// 6 decision from a single person
var decision = new Decision_1.Decision(1, true, 1, 1, 1);
// 7 fake user
var fakeUser = User_1.User.buildUser(userProperties);
fakeUser.fake();
// 8 google map
// const map = new CustomMap("map", lat, lng);
// map.addMarker(user);
// map.addMarker(politician);
// map.addMarker(fakeUser);
var root = document.getElementById("root");
// rendering html
if (root) {
  var userEdit = new UserEdit_1.UserEdit(root, user);
  userEdit.render();
} else {
  throw new Error("Html element or user not found");
}
// 9 collections
var userCollection = User_1.User.buildUserCollection();
userCollection.on("change", function () {
  var userCollectionDiv = document.createElement("userCollection");
  if (userCollectionDiv) {
    var userList = new UserList_1.UserList(userCollectionDiv, userCollection);
    userList.render();
    root.append(userCollectionDiv);
  }
});
userCollection.fetch();
var rp = require("request-promise");
var url =
  "https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States";
rp(url)
  .then(function (html) {
    //success!
  })
  ["catch"](function (err) {
    throw new Error(err);
  });

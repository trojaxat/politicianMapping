"use strict";
exports.__esModule = true;
var loginRoutes_1 = require("./routes/loginRoutes");
// const express = require("express");
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var cookie_session_1 = require("cookie-session");
// "start:parcel": "parcel ./src/index.html",
var app = express_1["default"]();
// This is required for typescript to see the response of the http
app.use(body_parser_1["default"].urlencoded({ extended: true }));
app.use(cookie_session_1["default"]({ keys: ["asdd"] }));
app.use(loginRoutes_1.router);
app.listen(1111, function () {
    console.log("App listening on port 1111");
});
// // 1 parliament
// let parliament = new Parliament(1, "Bundesrepublic", 300, 1);
// // 2 parliamentary new law
// let law = new Law(
//   1,
//   "Should there be a carbon tax on cars?",
//   new Date(),
//   new Date(),
//   true
// );
// //3 politician
// // let politician = new Politician(
// //   1,
// //   "Santi Pornavalai",
// //   25,
// //   true,
// //   "Afd",
// //   13.4930915,
// //   52.4930915
// // );
// // 4 peoples vote/decision
// let people = new People(1, 75.5, 67.2, true);
// // 5 individual user
// let userLocation = {
//   lat: 52.5137715,
//   lng: 13.4930915,
// };
// let userProperties = {
//   name: "lisa axford",
//   age: 55,
// };
// const user = User.build(userProperties);
// // 6 decision from a single person
// let decision = new Decision(1, true, 1, 1, 1);
// // 7 fake user
// const fakeUser = User.build(userProperties);
// fakeUser.fake();
// // 8 google map
// // const map = new CustomMap("map", lat, lng);
// // map.addMarker(user);
// // map.addMarker(politician);
// // map.addMarker(fakeUser);
// const root = document.getElementById("root");
// // rendering html
// if (root) {
//   let userEdit = new UserEdit(root, user);
//   userEdit.render();
// } else {
//   throw new Error("Html element or user not found");
// }
// // 9 collections
// const userCollection = User.buildCollection();
// userCollection.on("change", () => {
//   const userCollectionDiv = document.createElement("userCollection");
//   if (userCollectionDiv) {
//     let userList = new UserList(userCollectionDiv, userCollection);
//     userList.render();
//     root.append(userCollectionDiv);
//   }
// });
// // userCollection.fetch();
// const politicianCollection = Politician.buildCollection();
// politicianCollection.on("change", () => {
//   const politicianCollectionDiv = document.createElement(
//     "politicianCollection"
//   );
//   if (politicianCollectionDiv) {
//     let userList = new PoliticianList(
//       politicianCollectionDiv,
//       politicianCollection
//     );
//     userList.render();
//     root.append(politicianCollectionDiv);
//   }
// });
// politicianCollection.fetch();
// let websiteInfo = BundestagPolitician.getBundestagPoliticianWebsiteInfo();
// let selector: string = "Politician";
// let executor = new ScriptExecutor(selector, websiteInfo);
// executor.scriptSelector();

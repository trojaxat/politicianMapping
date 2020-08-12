"use strict";
exports.__esModule = true;
var PoliticianImport_1 = require("./src/scripts/PoliticianImport");
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
// // 3 politician
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
// const user = User.buildUser(userProperties);
// // 6 decision from a single person
// let decision = new Decision(1, true, 1, 1, 1);
// // 7 fake user
// const fakeUser = User.buildUser(userProperties);
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
// const userCollection = User.buildUserCollection();
// userCollection.on("change", () => {
//   const userCollectionDiv = document.createElement("userCollection");
//   if (userCollectionDiv) {
//     let userList = new UserList(userCollectionDiv, userCollection);
//     userList.render();
//     root.append(userCollectionDiv);
//   }
// });
// userCollection.fetch();
var baseUrl = "https://www.bundestag.de";
var politiciansUrl = "https://www.bundestag.de/ajax/filterlist/de/abgeordnete/525246-525246/h_e3c112579919ef960d06dbb9d0d44b67";
var politicianListElement = ".bt-open-in-overlay";
var politicianIndividualElement = ".bt-content-overlay";
var politicianWebsiteInfo = {
    baseUrl: baseUrl,
    politiciansUrl: politiciansUrl,
    politicianListElement: politicianListElement,
    politicianIndividualElement: politicianIndividualElement
};
var politicianImporter = new PoliticianImport_1.PoliticianImport(politicianWebsiteInfo);
var urls = politicianImporter.getPoliticianUrls(politiciansUrl, politicianListElement);
console.log("urls", urls);
// for (const url in urls) {
//   let politicianUrl = urls.href;
//   console.log("justt url", url);
//   let politicianInfo = politicianImporter.getPoliticianInformation(
//     politicianUrl,
//     politicianIndividualElement
//   );
//   let politicianCleanedInfo = politicianImporter.cleanPoliticianInfo(
//     politicianInfo
//   );
//   let politician = Politician.buildPolitician(politicianCleanedInfo);
//   politician.save();
// }

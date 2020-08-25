/**
 * External imports
 */
import axios from "axios";
import { router } from "../routes/loginRoutes";
// const express = require("express");
import express from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

/**
 * Internal imports
 */
import { BundestagPolitician } from "../importConst/BundestagPolitician";
import { Collection } from "../models/Collection";
import { CollectionView } from "../views/CollectionView";
import { CustomMap } from "../models/CustomMap";
import { Decision } from "../models/Decision";
import { Law } from "../models/Law";
import { ScriptExecutor } from "../scripts/ScriptExecutor";
import { Parliament } from "../models/Parliament";
import { Politician } from "../models/Politician";
import { Party } from "../models/Party";
import { People } from "../models/People";
import { PoliticianList } from "../views/PoliticianList";
import { User, UserProps } from "../models/User";
import { UserEdit } from "../views/UserEdit";
import { UserList } from "../views/UserList";
import { UserForm } from "../views/UserForm";
import { UserShow } from "../views/UserShow";

// "scripts": {
//   "start:build": "tsc -w",
//   "start:run": "nodemon build/src/index.js",
//   "start:db": "json-server -w db.json",
//   "start": "concurrently npm:start:*"
// },
// "start:parcel": "parcel ./src/index.html",

const app = express();
// This is required for typescript to see the response of the http
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["asdd"] }));
app.use(router);

app.listen(1111, () => {
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

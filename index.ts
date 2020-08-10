import axios from "axios";
import { Collection } from "./src/models/Collection";
import { CollectionView } from "./src/views/CollectionView";
import { Decision } from "./src/models/Decision";
import { Law } from "./src/models/Law";
import { Parliament } from "./src/models/Parliament";
import { Politician } from "./src/models/Politician";
import { People } from "./src/models/People";
import { User, UserProps } from "./src/models/User";
import { CustomMap } from "./src/models/CustomMap";
import { UserEdit } from "./src/views/UserEdit";
import { UserList } from "./src/views/UserList";
import { UserForm } from "./src/views/UserForm";
import { UserShow } from "./src/views/UserShow";

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
// let politician = new Politician(
//   1,
//   "Santi Pornavalai",
//   25,
//   true,
//   "Afd",
//   13.4930915,
//   52.4930915
// );

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

const user = User.buildUser(userProperties);

// 6 decision from a single person
let decision = new Decision(1, true, 1, 1, 1);

// 7 fake user
const fakeUser = User.buildUser(userProperties);
fakeUser.fake();

// 8 google map
// const map = new CustomMap("map", lat, lng);
// map.addMarker(user);
// map.addMarker(politician);
// map.addMarker(fakeUser);

const root = document.getElementById("root");
// rendering html
if (root) {
  let userEdit = new UserEdit(root, user);
  userEdit.render();
} else {
  throw new Error("Html element or user not found");
}

// 9 collections
const userCollection = User.buildUserCollection();
userCollection.on("change", () => {
  const userCollectionDiv = document.createElement("userCollection");
  if (userCollectionDiv) {
    let userList = new UserList(userCollectionDiv, userCollection);
    userList.render();
    root.append(userCollectionDiv);
  }
});

userCollection.fetch();

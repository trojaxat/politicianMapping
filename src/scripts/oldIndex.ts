/**
 * External imports
 */
import { router } from "../routes/loginRoutes";
import express from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

/**
 * Internal imports
 */
import { BundestagPolitician } from "../importConst/BundestagPolitician";
import { Decision } from "../models/Decision";
import { Law } from "../models/Law";
import { ScriptExecutor } from "../scripts/ScriptExecutor";
import { Parliament } from "../models/Parliament";
import { Party } from "../models/Party";
import { People } from "../models/People";
import { User } from "../models/User";

const app = express();
// This is required for typescript to see the response of the http
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["asdd"] }));
app.use(router);

app.listen(1111, () => {
  let string = "App listening on port 1111";
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

// // 4 peoples vote/decision
// let people = new People(1, 75.5, 67.2, true);

// const user = User.build(userProperties);

// // 6 decision from a single person
// let decision = new Decision(1, true, 1, 1, 1);

// // 7 fake user
// const fakeUser = User.build(userProperties);
// fakeUser.fake();

// let websiteInfo = BundestagPolitician.getBundestagPoliticianWebsiteInfo();
// let selector: string = "Politician";
// let executor = new ScriptExecutor(selector, websiteInfo);
// executor.scriptSelector();

// export abstract class Import<Document, Model> {
//   abstract parseDocument(document: Document): void;
//   abstract saveToModel(model: Model): void;
// }

import { PoliticianImport } from "./PoliticianImport";
import { Politician } from "../models/Politician";
import { UrlParser } from "./UrlParser";

let baseUrl = "https://www.bundestag.de";
let politiciansUrl =
  "https://www.bundestag.de/ajax/filterlist/de/abgeordnete/525246-525246/h_e3c112579919ef960d06dbb9d0d44b67";
let politicianListElement = ".bt-open-in-overlay";
let politicianIndividualElement = ".bt-content-overlay";

let politicianWebsiteInfo = {
  baseUrl,
  politiciansUrl,
  politicianListElement,
  politicianIndividualElement,
};

let politicianImporter = new PoliticianImport(politicianWebsiteInfo);

let urls = politicianImporter.getPoliticianUrls(
  politiciansUrl,
  politicianListElement
);

// for (const url in urls) {
//   let politicianUrl = urls.href;

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

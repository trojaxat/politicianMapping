"use strict";
// export abstract class Import<Document, Model> {
//   abstract parseDocument(document: Document): void;
//   abstract saveToModel(model: Model): void;
// }
exports.__esModule = true;
var PoliticianImport_1 = require("./PoliticianImport");
var baseUrl = "https://www.bundestag.de";
var politiciansUrl =
  "https://www.bundestag.de/ajax/filterlist/de/abgeordnete/525246-525246/h_e3c112579919ef960d06dbb9d0d44b67";
var politicianListElement = ".bt-open-in-overlay";
var politicianIndividualElement = ".bt-content-overlay";
var politicianWebsiteInfo = {
  baseUrl: baseUrl,
  politiciansUrl: politiciansUrl,
  politicianListElement: politicianListElement,
  politicianIndividualElement: politicianIndividualElement,
};
var politicianImporter = new PoliticianImport_1.PoliticianImport(
  politicianWebsiteInfo
);
var urls = politicianImporter.getPoliticianUrls(
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

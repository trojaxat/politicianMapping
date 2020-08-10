"use strict";
// export abstract class Import<Document, Model> {
//   abstract parseDocument(document: Document): void;
//   abstract saveToModel(model: Model): void;
// }
exports.__esModule = true;
var PoliticianImport_1 = require("./PoliticianImport");
var test = new PoliticianImport_1.PoliticianImport();
console.log(test.importPoliticians());

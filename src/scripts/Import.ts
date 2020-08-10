// export abstract class Import<Document, Model> {
//   abstract parseDocument(document: Document): void;
//   abstract saveToModel(model: Model): void;
// }

import { PoliticianImport } from "./PoliticianImport";

let test = new PoliticianImport();
console.log(test.importPoliticians());

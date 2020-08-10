import { Politician } from "../models/Politician";
import { UrlScraper } from "./UrlScraper";

export class PoliticianImport {
  baseUrl = "https://www.bundestag.de";
  politicianListElement = ".bt-open-in-overlay";
  politicianIndividualElement = ".bt-content-overlay";
  politiciansUrl =
    "https://www.bundestag.de/ajax/filterlist/de/abgeordnete/525246-525246/h_e3c112579919ef960d06dbb9d0d44b67";

  importPoliticians() {
    let scraper = new UrlScraper(
      this.politiciansUrl,
      this.politicianListElement
    );
    let politicianUrls = scraper.urlParse();

    politicianUrls.forEach((element: string) => {
      let politicianDetail = this.baseUrl + element;
      let scraper = new UrlScraper(
        politicianDetail,
        this.politicianIndividualElement
      );
      let politicianInfo = scraper.urlParse();
      let politician = Politician.buildPolitician(politicianInfo);
      politician.save();
    });

    return politicianUrls;
  }
}

// politiciansDetailPage.forEach(function (value) {
//   rp(politiciansDetailPage.value);

//   let politicianObj = value;
//   let politicianDetailPage = baseUrl + politicianObj.href;
//   delete Object.assign(politicianObj, {
//     name: politicianObj.title,
//   })["title"];
//   delete politicianObj.class;

//   let politician = Politician.buildPolitician(politicianObj);
//   politician.save();

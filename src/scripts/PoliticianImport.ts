import {
  Politician,
  PoliticianModel,
  PoliticianBase,
} from "../models/Politician";
import { UrlParser } from "./UrlParser";

export interface PoliticianImportModel {
  name?: string;
  age?: number;
  title?: string;
  href?: string;
  class?: string;
  address?: string;
  party?: string;
  link?: string;
}

export interface PoliticianWebsiteInfo {
  baseUrl?: string;
  politiciansUrl?: string;
  politicianListElement?: string;
  politicianDetailElement?: string;
}

export class PoliticianImport {
  constructor(public politicianWebsiteInfo: PoliticianWebsiteInfo) {}

  importPoliticians = () => {
    // if (
    //   this.politicianWebsiteInfo.politiciansUrl &&
    //   this.politicianWebsiteInfo.politicianListElement &&
    //   this.politicianWebsiteInfo.politicianDetailElement
    // ) {
    //   let urls = this.getPoliticianUrls(
    //     this.politicianWebsiteInfo.politiciansUrl,
    //     this.politicianWebsiteInfo.politicianListElement
    //   );
    //   for (const url in urls) {
    //     let politicianUrl = urls.href;
    //     let politicianInfo = this.getPoliticianInformation(
    //       politicianUrl,
    //       this.politicianWebsiteInfo.politicianDetailElement
    //     );
    //     let politicianCleanedInfo = this.cleanPoliticianInfo(politicianInfo);
    //     let politician = Politician.buildPolitician(politicianCleanedInfo);
    //     politician.save();
    //   }
    // }
  };

  getPoliticianUrls = (
    politiciansUrl: string,
    politicianListElement: string
  ) => {
    let politiciansParser = new UrlParser(
      politiciansUrl,
      politicianListElement
    );
    // go through each url and parse it
    return politiciansParser.urlParse();
  };

  getPoliticianInformation = (
    politicianUrl: string,
    politicianDetailElement: string
  ) => {
    let politicianParser = new UrlParser(
      politicianUrl,
      politicianDetailElement
    );

    return politicianParser.urlParse();
  };

  cleanPoliticianInfo = (politicianObj: PoliticianImportModel) => {
    if (politicianObj.href) {
      politicianObj.link =
        this.politicianWebsiteInfo.baseUrl + politicianObj.href;
    }

    if (politicianObj.title) {
      delete Object.assign(politicianObj, {
        name: politicianObj.title,
      })["title"];
    }

    if (politicianObj.class) {
      delete politicianObj.class;
    }

    return politicianObj;
  };
}

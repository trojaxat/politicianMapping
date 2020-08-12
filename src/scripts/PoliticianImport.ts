import { Politician, PoliticianBase } from "../models/Politician";
import { UrlParser, UrlObject } from "./UrlParser";

export interface PoliticianImportModel {
  name?: string;
  age?: number;
  title?: string;
  class?: string;
  address?: string;
  party?: string;
  href?: string;
  link?: string;
}

export interface PoliticianWebsiteInfo {
  baseUrl: string;
  politiciansUrl: string;
  politicianListElement: string;
  politicianDetailObject: { [key: string]: string };
}

export class PoliticianImport {
  constructor(public politicianWebsiteInfo: PoliticianWebsiteInfo) {}

  importPoliticians = () => {
    let self = this;
    this.getPoliticianUrls().then((urls) => {
      console.log("PoliticianImport -> importPoliticians -> urls", urls);

      // urls.forEach(function (value) {
      // let object = value as UrlObject;
      // const politicianInfo = self.getPoliticianInformation(object.href);
      // politicianInfo.then((politicianInfoObj) => {
      // let politicianCleanedInfo = self.cleanPoliticianInfo(
      //   politicianInfoObj
      // );
      // let politician = Politician.buildPolitician(politicianCleanedInfo);
      // politician.save();
      // });
      // });
    });
  };

  getPoliticianUrls = () => {
    let politiciansParser = new UrlParser(
      this.politicianWebsiteInfo.politiciansUrl,
      { url: this.politicianWebsiteInfo.politicianListElement }
    );

    return politiciansParser.urlParse();
  };

  getPoliticianInformation = (politicianUrl: string) => {
    let politicianFullUrl = this.politicianWebsiteInfo.baseUrl + politicianUrl;
    let politicianParser = new UrlParser(
      politicianFullUrl,
      this.politicianWebsiteInfo.politicianDetailObject
    );

    return politicianParser.urlParse();
  };

  cleanPoliticianInfo = (object: object) => {
    // let politicianObj = object as PoliticianBase;
    // if (politicianObj.href) {
    //   politicianObj.link =
    //     this.politicianWebsiteInfo.baseUrl + politicianObj.href;
    // }
    // if (politicianObj.title) {
    //   delete Object.assign(politicianObj, {
    //     name: politicianObj.title,
    //   })["title"];
    // }
    // if (politicianObj.class) {
    //   delete politicianObj.class;
    // }
    // return politicianObj;
  };
}

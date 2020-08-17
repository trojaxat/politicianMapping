import { Politician, PoliticianBase } from "../models/Politician";
import { UrlParser, UrlObject } from "./UrlParser";
import { database } from "faker";

export interface PoliticianImportModel {
  name?: string;
  age?: number;
  title?: string;
  class?: string;
  address?: string;
  party?: string;
  href?: string;
  link?: string[];
  contact?: string[];
  info?: string[];
}

export interface PoliticianWebsiteInfo {
  baseUrl: string;
  politiciansUrl: string;
  politicianListElement: string;
  politicianDetailObject: { [key: string]: string };
}

const politicianValueInAttributes = ["link", "info", "contact"];

interface PoliticianValueInAttributes {
  href: string;
  class: string;
  title: string;
}
const politicianValueInChild = ["name", "job"];

export class PoliticianImport {
  constructor(public politicianWebsiteInfo: PoliticianWebsiteInfo) {}

  importPoliticians = () => {
    let self = this;
    this.getPoliticianUrls()
      .then((urls) => {
        for (const url in urls) {
          let urlObject = (urls[url].attribs as unknown) as UrlObject;
          let stringValues = JSON.stringify(urlObject);

          const regexDataIdContext = /"data-id":"\d{6}"/gm;
          const foundArray = stringValues.match(regexDataIdContext);

          if (foundArray !== null && foundArray[0]) {
            let politicianUrlId = Number(foundArray[0].replace(/\D/g, ""));
            // Above solution just removes everything thats not a number, other solution with regex: /\d{6}/gm;
            if (typeof politicianUrlId === "number") {
              const politicianInfo = self.getPoliticianInformation(
                urlObject.href,
                politicianUrlId
              );

              politicianInfo.then((politicianInfoObj) => {
                let politicianCleanedInfo: PoliticianImportModel | void = self.cleanPoliticianInfo(
                  politicianInfoObj
                );
                console.log(
                  "PoliticianImport -> importPoliticians -> politicianCleanedInfo",
                  politicianCleanedInfo
                );
                // let politician = Politician.buildPolitician(politicianCleanedInfo);
                // politician.save();
              });
            }
          }
        }
      })
      .catch((error) => {
        throw Error(error);
      });
  };

  getPoliticianUrls = (): Promise<{ [key: string]: any }> => {
    let politiciansParser = new UrlParser(
      this.politicianWebsiteInfo.politiciansUrl,
      { url: this.politicianWebsiteInfo.politicianListElement }
    );

    return politiciansParser.urlParse();
  };

  getPoliticianInformation = (politicianUrl: string, politicianId: number) => {
    let politicianIdentifier = "#mod" + politicianId;
    let politicianFullUrl = this.politicianWebsiteInfo.baseUrl + politicianUrl;

    let politicianObject = Object.create(
      this.politicianWebsiteInfo.politicianDetailObject
    );

    // Make html identifier specific to this politicians name
    politicianObject.name =
      politicianIdentifier +
      this.politicianWebsiteInfo.politicianDetailObject.name;

    // Make html identifier specific to this politicians job
    politicianObject.job =
      politicianIdentifier +
      this.politicianWebsiteInfo.politicianDetailObject.job;

    let politicianParser = new UrlParser(politicianFullUrl, politicianObject);

    return politicianParser.urlParse();
  };

  cleanPoliticianInfo = (object: {
    [key: string]: any;
  }): PoliticianImportModel | void => {
    let politicianObj: PoliticianImportModel | undefined;

    for (const attribute in object) {
      let attributeName: string;
      attributeName = attribute.replace(/ .*/, "");
      let value = (object[attribute]
        .attribs as unknown) as PoliticianValueInAttributes;

      if (politicianValueInAttributes.includes(attributeName)) {
        // add to obj
        if (value.class) {
          delete value.class;
        }

        if (value.title) {
          delete Object.assign(value, {
            name: value.title,
          })["title"];
        }

        console.log("politicianObj", politicianObj);
      } else if (politicianValueInChild.includes(attributeName)) {
        // add to obj
      }
      Object.assign(politicianObj, {
        [attribute]: value,
      });
    }
    return politicianObj;
  };

  setAsPolitician = (object: object) => {
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

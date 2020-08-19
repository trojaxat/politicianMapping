import {
  Politician,
  PoliticianBase,
  PoliticianModel,
} from "../models/Politician";
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
  title?: string;
  attribs: object;
  name?: string;
  job?: string;
  party?: string;
  address?: string;
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
            // This solution removes everything thats not a number, other solution with regex possible: /\d{6}/gm;
            let politicianUrlId = Number(foundArray[0].replace(/\D/g, ""));
            if (typeof politicianUrlId === "number") {
              const politicianInfo = self.getPoliticianInformation(
                urlObject.href,
                politicianUrlId
              );

              politicianInfo
                .then((politicianInfoObj) => {
                  let politician = Object.create(politicianInfoObj);
                  for (const attribute in politicianInfoObj) {
                    let attributeName: string;
                    attributeName = attribute.replace(/ .*/, "");

                    if (politicianValueInAttributes.includes(attributeName)) {
                      let value = politicianInfoObj[attribute]
                        .attribs as PoliticianValueInAttributes;
                      if (Object.keys(value).length !== 0) {
                        if (attributeName === "info") {
                          console.log("attributeName", attributeName);
                        }

                        if (attributeName === "contact") {
                          console.log("attributeName", attributeName);
                        }

                        if (attributeName === "link") {
                          if (value.class) {
                            delete value.class;
                          }

                          let politicianLinkObj = {
                            link: value.href,
                            title: value.title,
                          };

                          if (politician.link) {
                            politician.link.push(politicianLinkObj);
                          } else {
                            politician.link = [politicianLinkObj];
                          }
                        }
                      }
                    } else if (politicianValueInChild.includes(attributeName)) {
                      let value = politicianInfoObj[attribute];

                      if (attributeName === "job") {
                        politician[
                          attributeName
                        ] = value.children[0].data.trim();
                      }

                      if (attributeName === "name") {
                        let information = value.children[0].data;

                        politician[attributeName] = information
                          .split(",")[0]
                          .trim();
                        politician["party"] = information.split(",")[1].trim();
                      }
                    }
                  }
                  return politician;
                })
                .then((politicianInfo) => {
                  let politician = Politician.buildPolitician(politicianInfo);
                  // politician.save();
                })
                .catch((error) => {
                  throw Error("Politician Import" + error);
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

  static cleanPoliticianInfo = (object: { [key: string]: any }) => {
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

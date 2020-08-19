import { Politician } from "../models/Politician";
import { UrlParser, UrlObject } from "./UrlParser";

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

const politicianValueInAttributes = ["link"];
const politicianValueInChild = ["name", "job", "info", "contact"];
const politicianValueString = ["name", "job"];

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
                        if (value.class) {
                          delete value.class;
                        }

                        if (politician.link) {
                          politician.link.push(value);
                        } else {
                          politician.link = [value];
                        }
                      }
                    } else if (politicianValueInChild.includes(attributeName)) {
                      let value = politicianInfoObj[attribute];
                      if (typeof value.children[0].data === "string") {
                        let string = value.children[0].data
                          .replace(/\n/g, "")
                          .trim();

                        if (politicianValueString.includes(attributeName)) {
                          if (attributeName === "name") {
                            let information = value.children[0].data;

                            politician[attributeName] = information
                              .split(",")[0]
                              .trim();
                            politician["party"] = information
                              .split(",")[1]
                              .trim();
                          } else {
                            politician[attributeName] = string;
                          }
                        } else {
                          if (politician[attributeName]) {
                            politician[attributeName].push({
                              [attributeName]: string,
                            });
                          } else {
                            politician[attributeName] = [
                              { [attributeName]: string },
                            ];
                          }
                        }
                      }
                    }
                  }
                  // try getting this info the function instead
                  console.log(
                    "PoliticianImport -> importPoliticians -> politician",
                    politician
                  );
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

  // cleanInfo = (object: { [key: string]: any }) => {
  //   // this needs to clean the info as an abstract method, with specialization allowed
  // };
}

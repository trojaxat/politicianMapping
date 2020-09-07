import { Import, WebsiteInfo } from "./Import";
import { Politician } from "../models/Politician";

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

export class PoliticianImport extends Import<WebsiteInfo> {
  public regexDataIdContext = /"data-id":"\d{6}"/gm;

  saveInfo = (href: string, id?: number): void => {
    let self = this;
    let info = self.getInformation(href, id);

    info
      .then((infoObj) => {
        let foundInfo = this.cleanInfo(infoObj);
        let model = Politician.build(foundInfo);
        model.save();
      })
      .catch((error) => {
        throw Error("Model Import" + error);
      });
  };

  cleanInfo = (politicianInfoObj: { [key: string]: any }) => {
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
          let string = value.children[0].data.replace(/\n/g, "").trim();

          if (politicianValueString.includes(attributeName)) {
            if (attributeName === "name") {
              let information = value.children[0].data;

              politician[attributeName] = information.split(",")[0].trim();
              politician["party"] = information.split(",")[1].trim();
            } else {
              politician[attributeName] = string;
            }
          } else {
            if (politician[attributeName]) {
              politician[attributeName].push({
                [attributeName]: string,
              });
            } else {
              politician[attributeName] = [{ [attributeName]: string }];
            }
          }
        }
      }
    }
    return politician;
  };
}

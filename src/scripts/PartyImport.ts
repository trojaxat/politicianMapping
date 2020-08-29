import { Import, WebsiteInfo } from "./Import";
import { Party } from "../models/Party";

export interface PartyImportModel {
  name?: string;
  websiteId?: number;
  leader?: string;
  leaderId?: number;
  phoneNumber?: number;
  address?: string;
  href?: string;
  link?: string[];
  contact?: string[];
  info?: string[];
}

interface PartyValueInAttributes {
  href: string;
  class: string;
  title?: string;
  attribs: object;
  name?: string;
  job?: string;
  party?: string;
  address?: string;
}

const partyValueInAttributes = ["link"];
const partyValueInChild = ["info", "contact"];
const partyValueString = ["name", "leader", "phoneNumber", "address"];

export class PartyImport extends Import<WebsiteInfo> {
  public regexDataIdContext = /"data-id":"\d{6}"/gm;

  saveInfo = (href: string, id?: number): void => {
    let self = this;
    let info = self.getInformation(href, id);

    info
      .then((infoObj) => {
        let foundInfo = this.cleanInfo(infoObj);
        let model = Party.build(foundInfo);
        // model.save();
      })
      .catch((error) => {
        throw Error("Model Import" + error);
      });
  };

  cleanInfo = (partyInfoObj: { [key: string]: any }) => {
    let party = Object.create(partyInfoObj);
    for (const attribute in partyInfoObj) {
      let attributeName: string;
      attributeName = attribute.replace(/ .*/, "");

      if (partyValueInAttributes.includes(attributeName)) {
        let value = partyInfoObj[attribute].attribs as PartyValueInAttributes;
        if (Object.keys(value).length !== 0) {
          if (value.class) {
            delete value.class;
          }

          if (party.link) {
            party.link.push(value);
          } else {
            party.link = [value];
          }
        }
      } else if (partyValueInChild.includes(attributeName)) {
        let value = partyInfoObj[attribute];
        if (typeof value.children[0].data === "string") {
          let string = value.children[0].data.replace(/\n/g, "").trim();

          if (partyValueString.includes(attributeName)) {
            if (attributeName === "name") {
              let information = value.children[0].data;

              party[attributeName] = information.split(",")[0].trim();
              party["party"] = information.split(",")[1].trim();
            } else {
              party[attributeName] = string;
            }
          } else {
            if (party[attributeName]) {
              party[attributeName].push({
                [attributeName]: string,
              });
            } else {
              party[attributeName] = [{ [attributeName]: string }];
            }
          }
        }
      }
    }
    return party;
  };
}

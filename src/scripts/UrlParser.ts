import axios, { AxiosPromise } from "axios";

const cheerio = require("cheerio");

export interface UrlObject {
  href: string;
}

export class UrlParser {
  url: string;
  htmlElementIdentifier: { [key: string]: string } = {};

  constructor(
    url: string,
    htmlElementIdentifier: { [key: string]: string } = {}
  ) {
    this.url = url;
    this.htmlElementIdentifier = htmlElementIdentifier;
  }

  fetch(): AxiosPromise {
    return axios.get(`${this.url}`);
  }

  urlParse = () => {
    let htmlElementIdentifiers = this.htmlElementIdentifier;
    let informationObj: { [key: string]: string } = {};
    let promise = this.fetch();

    return promise
      .then((response) => {
        let html = response.data;

        for (const key in htmlElementIdentifiers) {
          let totalPositionsOfInterest = cheerio(htmlElementIdentifiers, html)
            .length;
          for (let i = 0; i < totalPositionsOfInterest; i++) {
            const $ = cheerio.load(html, {
              xmlMode: true,
            });

            let element = htmlElementIdentifiers[key];

            if (key === "url") {
              let stuffScraped = $(element)[i].attribs;
              Object.assign(informationObj, { [key]: stuffScraped });
            } else {
              let stuffScraped = $(element)[i].text().trim();
              Object.assign(informationObj, { [key]: stuffScraped });
            }
          }
          console.log(
            "UrlParser -> urlParse -> informationObj",
            informationObj
          );
          return informationObj;
        }
      })
      .catch((error) => {
        throw new Error(error);
      });
  };
}

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
        const $ = cheerio.load(html, {
          xmlMode: true,
        });

        // For each different html that we want to find
        for (const key in htmlElementIdentifiers) {
          let totalPositionsOfInterest = $(htmlElementIdentifiers[key], html)
            .length;

          // For each time we found the individual html
          for (let i = 0; i < totalPositionsOfInterest; i++) {
            let element = htmlElementIdentifiers[key];

            if (key === "url") {
              let stuffScraped = $(element)[i].attribs;
              Object.assign(informationObj, { [key + i]: stuffScraped });
            } else if (key === "contact") {
              let stuffScraped = $(element)[i].attribs.href;
              Object.assign(informationObj, { [key]: stuffScraped });
            } else {
              // let stuffScraped = $(element)[i].text().trim();
              // Object.assign(informationObj, { [key]: stuffScraped });
            }
          }
        }
        return informationObj;
      })
      .catch((error) => {
        throw new Error("this is an error in urlparse" + error);
      });
  };
}

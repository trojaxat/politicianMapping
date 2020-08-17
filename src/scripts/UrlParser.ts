/**
 *  This works by calling urlparser with a url string and a type of selector from the html of the page,
 *  url example "https://stackoverflow.com/questions/36607979/how-to-get-around-property-does-not-exist-on-object/45090885"
 *
 *  selector example { picture: "#left-sidebar > div.left-sidebar--sticky-container.js-sticky-leftnav"}
 *  multiple selectors can be given into the object
 *
 *  the selector can be generated found in dev tools of chrome, right click on html element, copy, copy selector
 *  then calling .urlParse(), which returns a promise, then() can be used to see the results
 *
 * */
import axios, { AxiosPromise, AxiosResponse } from "axios";

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

  urlParse = (): Promise<{ [key: string]: any }> => {
    let htmlElementIdentifiers = this.htmlElementIdentifier;
    let informationObj: { [key: string]: any } = {};
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

            let stuffScraped = $(element)[i];
            Object.assign(informationObj, { [key + " " + i]: stuffScraped });
          }
        }
        return informationObj;
      })
      .catch((error) => {
        throw new Error("this is an error in urlparse" + error);
      });
  };
}

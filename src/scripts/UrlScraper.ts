const rp = require("request-promise");
const $ = require("cheerio");

export class UrlScraper {
  url: string;
  htmlElementIdentifier: string;

  constructor(url: string, htmlElementIdentifier: string) {
    this.url = url;
    this.htmlElementIdentifier = htmlElementIdentifier;
  }

  urlParse() {
    let htmlElementIdentifier = this.htmlElementIdentifier;

    return rp(this.url)
      .then(function (html: DocumentFragment) {
        let totalPositionsOfInterest = $(htmlElementIdentifier, html).length;
        let informationArray = [];

        for (let i = 0; i < totalPositionsOfInterest; i++) {
          if ($(htmlElementIdentifier, html)[i].attribs) {
            let individualObj = $(htmlElementIdentifier, html)[i].attribs;
            if (individualObj) {
              informationArray.push(individualObj);
            }
          }
        }
        return informationArray;
      })
      .catch(function (err: string) {
        throw new Error(err);
      });
  }
}

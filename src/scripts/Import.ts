import { UrlParser, UrlObject } from "./UrlParser";

export interface WebsiteInfo {
  baseUrl: string;
  url: string;
  listElement: string;
  detailObject: { [key: string]: string };
}

export abstract class Import<Info extends WebsiteInfo> {
  constructor(public websiteInfo: WebsiteInfo) {}

  abstract regexDataIdContext: RegExp;

  abstract cleanInfo(object: { [key: string]: any }): Object;
  abstract saveInfo(href: string, id?: number): void;

  /**
   * This is the main calling process of the Imports class, which will find the urls of a future model,
   * then it will cycle through the urls, going to each one to get the information from that page,
   * it uses an id identifier, if its required, this also saves each individual model into the db
   */
  getMultipleModels = () => {
    this.getUrls()
      .then((urls) => {
        for (const url in urls) {
          let urlObject = (urls[url].attribs as unknown) as UrlObject;
          let stringValues = JSON.stringify(urlObject);

          let id = this.getIdInfo(stringValues);
          if (typeof id === "number") {
            this.saveInfo(urlObject.href, id);
          } else {
            this.saveInfo(urlObject.href);
          }
        }
      })
      .catch((error) => {
        throw Error(error);
      });
  };

  /**
   * This gets an id based on the regex specific to only the bundestag style atm,
   * E.g. "data-id":"512388" in the attributes, this is set in each PoliticianImportClass
   * I am not sure whether I want to make something like "BundestagPoliticianImport" subclasses
   * or whether I want to make this a parameter that can be given to import, unclear what future needs will be
   *
   * @param jsonString
   * @param href
   */
  getIdInfo = (jsonString: string): number | boolean => {
    const foundArray = jsonString.match(this.regexDataIdContext);

    if (foundArray !== null && foundArray[0]) {
      // This solution removes everything thats not a number, other solution with regex possible: /\d{6}/gm;
      let id = Number(foundArray[0].replace(/\D/g, ""));
      if (typeof id === "number") {
        return id;
      }
    }
    return false;
  };

  /**
   * This method uses the urlParser to return a promise of the main page,
   * which has links for each specific future model page
   */
  getUrls = (): Promise<{ [key: string]: any }> => {
    let parser = new UrlParser(this.websiteInfo.url, {
      url: this.websiteInfo.listElement,
    });

    return parser.urlParse();
  };

  /**
   * This is for each individual model page adding specific identifiers,
   * these are page specific and have been found by the getIdInfo method
   *
   * @param url
   * @param identifier
   */
  getInformation = (url: string, identifier?: number) => {
    let fullUrl = this.websiteInfo.baseUrl + url;

    let object = Object.create(this.websiteInfo.detailObject);

    if (identifier) {
      // Make html identifier specific to this name
      object.name = identifier + this.websiteInfo.detailObject.name;

      // Make html identifier specific to this job
      object.job = identifier + this.websiteInfo.detailObject.job;
    }

    let parser = new UrlParser(fullUrl, object);

    return parser.urlParse();
  };
}

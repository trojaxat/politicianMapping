import { WebsiteInfo } from "../scripts/Import";

/**
 * This is a placeholder class which exists to hold the current known info for the bundestag website,
 * it accepts a url parameter in order to use this on different pages for all the politicians (current url gives 20-40 politicians)
 */
export class BundestagPolitician {
  protected static baseUrl = "https://www.bundestag.de";
  public static url =
    "https://www.bundestag.de/ajax/filterlist/de/abgeordnete/525246-525246/h_e3c112579919ef960d06dbb9d0d44b67";
  protected static listElement = ".bt-open-in-overlay";

  protected static detailObject: { [key: string]: string } = {
    name:
      " > div > div.bt-profil.row > div.col-xs-8.col-md-9.bt-biografie-name > h3",
    job:
      " > div > div.bt-profil.row > div.col-xs-8.col-md-9.bt-biografie-name > div > p",
    contact: "#bt-kontakt-collapse > div > div:nth-child(3) > ul > li > a",
    link: "#bt-kontakt-collapse > div > div:nth-child(3) > ul > li > a",
    info: "#ptv1 > div > div:nth-child(1) > p",
  };

  static getBundestagPoliticianWebsiteInfo(urlParam?: string): WebsiteInfo {
    let url: string = urlParam ?? BundestagPolitician.url;

    let baseUrl = BundestagPolitician.baseUrl;
    let listElement = BundestagPolitician.listElement;
    let detailObject = BundestagPolitician.detailObject;
    let websiteInfo: WebsiteInfo = {
      baseUrl,
      listElement,
      url,
      detailObject,
    };

    return websiteInfo;
  }
}

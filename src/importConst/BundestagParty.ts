import { WebsiteInfo } from "../scripts/Import";

/**
 * This is a placeholder class which exists to hold the current known info for the bundestag website,
 * it accepts a url parameter in order to use this on different pages for all the Partys (current url gives 20-40 Partys)
 */
export class BundestagParty {
  protected static baseUrl = "https://www.bundestag.de/";
  protected static listElement = ".bt-open-in-overlay";
  public static url = "https://www.bundestag.de/parlament/fraktionen";

  protected static detailObject: { [key: string]: string } = {
    contact:
      "#bt-beschluss-collapse_251442 > div > div > p:nth-child(2) > a:nth-child(1)",
    name: "#bt-beschluss-collapse_251442 > div > div > p:nth-child(1) > strong",
    link:
      "#bt-beschluss-collapse_251442 > div > div > p:nth-child(2) > a:nth-child(1)",
    info: "#ptv1 > div > div:nth-child(1) > p",
    leader:
      "#mod485836 > div.bt-module-overlay > div > div.bt-overlay-content > div > div > div.row > article > div.bt-standard-content > div > p:nth-child(2) > a",
  };

  static getBundestagPartyWebsiteInfo(urlParam?: string): WebsiteInfo {
    let url: string = urlParam ?? BundestagParty.url;

    let baseUrl = BundestagParty.baseUrl;
    let listElement = BundestagParty.listElement;
    let detailObject = BundestagParty.detailObject;
    let websiteInfo: WebsiteInfo = {
      baseUrl,
      listElement,
      url,
      detailObject,
    };

    return websiteInfo;
  }
}

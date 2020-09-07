import { PoliticianImport } from "./PoliticianImport";
import { PartyImport } from "./PartyImport";
import { WebsiteInfo } from "./Import";

/**
 * This class exists as a switch only in order to call the subtypes of the import class in an easy and pretty way
 */
export class ScriptExecutor {
  selector: string;
  websiteInfo: WebsiteInfo;

  constructor(selector: string, websiteInfo: WebsiteInfo) {
    this.selector = selector;
    this.websiteInfo = websiteInfo;
  }

  scriptSelector = () => {
    switch (this.selector) {
      case "Politician": {
        let politicianImporter = new PoliticianImport(this.websiteInfo);
        politicianImporter.getMultipleModels();
        break;
      }
      case "Party": {
        let partyImporter = new PartyImport(this.websiteInfo);
        partyImporter.getMultipleModels();
        break;
      }
      case "Voter": {
        console.log("Fair");
        break;
      }
      default: {
        console.log("Invalid choice");
        break;
      }
    }
  };
}

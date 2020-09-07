import React from "react";
import { ScriptExecutor } from "../../scripts/ScriptExecutor";
import { BundestagPolitician } from "../../importConst/BundestagPolitician";
import { WebsiteInfo } from "../../scripts/Import";
import { RouteComponentProps } from "react-router-dom";
import { PoliticalInformationFormCss } from "./PoliticalInformationFormCss";

export interface PoliticalInformationFormState {
  model: string;
  result: any;
  formRequired: { [string: string]: string } | null;
  formDetails: { [string: string]: string } | null;
  backendWebsiteInfo: WebsiteInfo;
}

export interface PoliticalInformationFormProps extends RouteComponentProps {
  modelOptions: string[];
}

const websiteInfo = BundestagPolitician.getBundestagPoliticianWebsiteInfo();

const initialFormValue = {
  baseUrl: "",
  url: "",
  listElement: "",
};

class PoliticalInformationForm extends React.Component<
  PoliticalInformationFormProps,
  PoliticalInformationFormState
> {
  constructor(props: PoliticalInformationFormProps) {
    super(props);
    this.state = {
      model: "",
      formRequired: initialFormValue,
      formDetails: null,
      result: null,
      backendWebsiteInfo: websiteInfo,
    };
  }

  onChangeFormValue = (event: any) => {
    let formValue = { [event.target.id]: event.target.value };
    this.setState({ formRequired: formValue });
    console.log(this.state.formRequired);
  };

  onChangeFormDetailValue = (event: any) => {
    let formDetail = { [event.target.id]: event.target.value };
    this.setState({ formDetails: formDetail });
  };

  onModelChange = (event: any) => {
    this.setState({ model: event.target.value });
  };

  onButtonFind = (event: any) => {
    let websiteInfo: any = this.state.formRequired;
    websiteInfo.detailObject = this.state.formDetails;
    let formSend = (websiteInfo as unknown) as WebsiteInfo;

    console.log("onButtonFind -> formSend", formSend);
    // formSend = this.state.backendWebsiteInfo;
    if (formSend) {
      let executor = new ScriptExecutor(this.state.model, formSend);
      let result = executor.scriptSelector();
      this.setState({ result: result });
      console.log(this.state.result);
    } else {
      this.setState({ result: null });
    }
  };

  render(): JSX.Element {
    const modelDropDown: string[] = (this.props as any).modelOptions;

    let importOptions: JSX.Element[] = [<option>{"None available"}</option>];
    if (typeof modelDropDown !== "undefined") {
      importOptions = modelDropDown.map((icon: any) => (
        <option key={icon}>{icon}</option>
      ));
    }

    // think this through before doing it
    return (
      <PoliticalInformationFormCss>
        <strong>Select Category:</strong>
        <select value={this.state.model} onChange={this.onModelChange}>
          <option defaultValue="" key={"Test"}>
            {"Select"}
          </option>
          {importOptions}
        </select>

        <div>
          <input
            placeholder={"Paste Base Url..."}
            id="baseUrl"
            type="text"
            onChange={this.onChangeFormValue}
          />
        </div>

        <div>
          <input
            placeholder={"Paste Specific Url..."}
            id="url"
            type="text"
            onChange={this.onChangeFormValue}
          />
        </div>

        <div>
          <input
            placeholder={"Paste list element..."}
            id="listElement"
            type="text"
            onChange={this.onChangeFormValue}
          />
        </div>

        <div>
          <input
            placeholder={"Paste selector name..."}
            id="detail_name"
            type="text"
            onChange={this.onChangeFormDetailValue}
          />
        </div>

        <div>
          <input
            placeholder={"Paste selector job..."}
            id="detail_job"
            type="text"
            onChange={this.onChangeFormDetailValue}
          />
        </div>

        <div>
          <input
            placeholder={"Paste selector contact..."}
            id="detail_contact"
            type="text"
            onChange={this.onChangeFormDetailValue}
          />
        </div>

        <div>
          <input
            placeholder={"Paste selector link..."}
            id="detail_link"
            type="text"
            onChange={this.onChangeFormDetailValue}
          />
        </div>

        <div>
          <input
            placeholder={"Paste selector info..."}
            id="detail_info"
            type="text"
            onChange={this.onChangeFormDetailValue}
          />
        </div>

        <button onClick={this.onButtonFind} id="submitHashtag">
          {"Find information on page"}
        </button>
      </PoliticalInformationFormCss>
    );
  }
}
export default PoliticalInformationForm;

import React from "react";
import { ScriptExecutor } from "../../scripts/ScriptExecutor";
import { WebsiteInfo } from "../../scripts/Import";
import "./PoliticalInformationForm.css";

export interface PoliticalInformationFormState {
  model: string;
  result: any;
  formValue: { [key: string]: string } | null;
}

export interface PoliticalInformationFormProps {
  modelOptions: string[];
}

class PoliticalInformationForm extends React.Component<
  PoliticalInformationFormProps,
  PoliticalInformationFormState
> {
  constructor(props: PoliticalInformationFormProps) {
    super(props);
    this.state = {
      model: "",
      formValue: null,
      result: null,
    };
  }

  onChangeFormValue = (event: any) => {
    let formValue = { [event.target.id]: event.target.value };
    this.setState({ formValue });
    console.log(this.state.formValue);
  };

  onModelChange = (event: any) => {
    this.setState({ model: event.target.value });
  };

  onButtonFind = () => {
    let formSend = (this.state.formValue as unknown) as WebsiteInfo;
    if (formSend !== null) {
      let executor = new ScriptExecutor(this.state.model, formSend);
      let result = executor.scriptSelector();
      this.setState({ result: result });
    }
  };

  render(): JSX.Element {
    const modelOptions: string[] = (this.props as any).modelOptions;

    let importOptions = this.props.modelOptions.map((icon: any) => (
      <option key={icon}>{icon}</option>
    ));

    // think this through before doing it
    return (
      <div>
        <strong>Select Category:</strong>
        <select value={this.state.model} onChange={this.onModelChange}>
          {importOptions}
        </select>
        <input
          placeholder={"Paste Url..."}
          id="baseUrl"
          type="text"
          onChange={this.onChangeFormValue}
        />

        <input
          placeholder={"Paste list element..."}
          id="listElement"
          type="text"
          onChange={this.onChangeFormValue}
        />

        <input
          placeholder={"Paste selector name..."}
          id="name"
          type="text"
          onChange={this.onChangeFormValue}
        />

        <input
          placeholder={"Paste selector name..."}
          id="name"
          type="text"
          onChange={this.onChangeFormValue}
        />
        <button onClick={this.onButtonFind} id="submitHashtag">
          {"Find information on page"}
        </button>
      </div>
    );
  }
}
export default PoliticalInformationForm;

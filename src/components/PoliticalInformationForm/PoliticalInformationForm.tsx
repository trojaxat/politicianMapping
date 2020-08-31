import React from "react";
import "./PoliticalInformationForm.css";

export interface PoliticalInformationFormState {
  model: string;
  result: any;
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
      result: null,
    };
  }

  onChange = (event: any) => {
    this.setState({ model: event.target.value });
  };

  onButtonFind = () => {
    let result: any = "I dont know";

    this.setState({ result: result });
  };

  render(): JSX.Element {
    let modelOptions = (this.props as any).modelOptions as string[];
    // modelOptions.push("politician");

    // const importOptions = modelOptions.forEach((icon: any) => (
    //   <option key={icon.id}>{icon.link}</option>
    // ));

    // think this through before doing it
    return (
      <div>
        <strong>Select Category:</strong>
        <select value={this.state.model} onChange={this.onChange}></select>
        <input
          placeholder={"Search for politician..."}
          type="text"
          onChange={this.onChange}
        />
        <button onClick={this.onButtonFind} id="submitHashtag">
          {"Find information on page"}
        </button>
      </div>
    );
  }
}
export default PoliticalInformationForm;

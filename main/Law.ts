export default class Law {
  id: number;
  title: string;
  started: Date;
  decisionDate: Date;
  decision: boolean;

  constructor(
    id: number,
    title: string,
    started: Date,
    decisionDate: Date,
    decision: boolean
  ) {
    this.id = id;
    this.title = title;
    this.started = started;
    this.decisionDate = decisionDate;
    this.decision = decision;
  }
}

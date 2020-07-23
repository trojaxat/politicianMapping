export default class Decision {
  id: number;
  decision: boolean;
  userId: number;
  lawId: number;
  parliamantId: number;

  constructor(
    id: number,
    decision: boolean,
    userId: number,
    lawId: number,
    parliamentId: number
  ) {
    this.id = id;
    this.decision = decision;
    this.userId = userId;
    this.lawId = lawId;
    this.parliamantId = parliamentId;
  }
}

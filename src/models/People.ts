export class People {
  id: number;
  percentageVoted: number;
  votedYes: number;
  wantLaw: boolean;

  constructor(
    id: number,
    percentageVoted: number,
    votedYes: number,
    wantLaw: boolean
  ) {
    this.id = id;
    this.percentageVoted = percentageVoted;
    this.votedYes = votedYes;
    this.wantLaw = wantLaw;
  }
}

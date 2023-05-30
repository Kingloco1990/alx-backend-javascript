export interface MajorCredits {
  credits: number;
  majorCreditBrand: void;
}

export interface MinorCredits {
  credits: number;
  minoCreditBrand: void;
}

const sumMajorCredits = (subject1: MajorCredits, subject2: MajorCredits): MajorCredits => {
  return {credits: subject1.credits + subject2.credits} as MajorCredits;
}

const sumMinorCredits = (subject1: MinorCredits, subject2: MinorCredits): MinorCredits => {
  return {credits: subject1.credits + subject2.credits} as MinorCredits;
}

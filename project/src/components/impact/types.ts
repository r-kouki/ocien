export interface FootprintQuestion {
  id: string;
  question: string;
  options: {
    value: number;
    label: string;
  }[];
}

export interface FootprintAnswers {
  [key: string]: number;
}
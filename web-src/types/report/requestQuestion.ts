export interface AddQuestionOption {
  text: Object | string;
  value?: string;
}

export interface AddQuestion {
  questionText: Object | string;
  answerType: "1" | "2" | "3" | "4";
  isRequired: boolean;
  option: AddQuestionOption[] | null;
}

export interface AnswerOption {
  text: Object | string;
  value: boolean | string | number;
  addquestion?: AddQuestion[] | null;
}

export interface Report {
  repotIdx: number;
  repotId: string;
  repotLang: string;
  repotTitle: Object | string;
  questionText: Object | string;
  answerType: "1" | "2" | "3" | "4";
  answerData: string; // 실제로는 string으로 들어올 수도 있으므로 유연하게 처리
  isRequired: boolean;
  useYn: "Y" | "N";
  order: number;
  regUserIdx: number;
  modUserIdx: number;
  repotIdxs: string | string[];
}

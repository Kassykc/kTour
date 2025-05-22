export interface AddQuestionOption {
  text: string;
  value?: string;
}

export interface AddQuestion {
  questionText: string;
  answerType: "text" | "textarea" | "radio" | "checkbox";
  isRequired: boolean;
  option: AddQuestionOption[] | null;
}

export interface AnswerOption {
  text: string;
  value: boolean | string | number;
  addquestion?: AddQuestion[] | null;
}

export interface Report {
  repotIdx: number;
  repotId: string;
  repotLang: string;
  repotTitle: string;
  questionText: string;
  answerType: "text" | "textarea" | "radio" | "checkbox";
  answerData: string; // 실제로는 string으로 들어올 수도 있으므로 유연하게 처리
  isRequired: boolean;
  useYn: "Y" | "N";
  order: number;
  regUserIdx: number;
  modUserIdx: number;
  repotIdxs: string | string[];
}

export interface PopupData {
  popupIdx: number;
  title: string;
  content: string;
  positionTop: number;
  positionLeft: number;
  sizeWidth: number;
  sizeHeight: number;
  optionScrollYn: string;
  option24HoursYn: string;
  optionLookingYn: string;
  startDate: string;
  endDate: string;
  useYn: string;
  delYn: string;
  showYn: string;
//   attachmentOrgFile: string[]; // 첨부된 원본 파일 이름 배열
//   attachmentThumbFile: string[]; // 첨부된 썸네일 파일 이름 배열
  popupIdxs: number[]; // 팝업 인덱스 배열
  fileContent: string;
}

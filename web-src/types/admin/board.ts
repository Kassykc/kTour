export interface PageInfo {
  pageNum: number; // 현재 페이지 번호
  pageSize: number; // 페이지당 항목 수
  size: number; // 현재 페이지의 항목 수
  startRow: number; // 현재 페이지의 시작 행
  endRow: number; // 현재 페이지의 마지막 행
  pages: number; // 총 페이지 수
  total: number; // 총 항목 수
  prePage: number; // 이전 페이지 번호
  nextPage: number; // 다음 페이지 번호
  hasPreviousPage: boolean; // 이전 페이지 존재 여부
  hasNextPage: boolean; // 다음 페이지 존재 여부
  navigatePages: number; // 네비게이션에 표시할 페이지 수
  navigatepageNums: number[]; // 네비게이션 페이지 번호 배열
  navigateFirstPage: number; // 네비게이션의 첫 번째 페이지 번호
  navigateLastPage: number; // 네비게이션의 마지막 페이지 번호
  firstPage: boolean; // 첫 번째 페이지 여부
  lastPage: boolean; // 마지막 페이지 여부
}

export interface ResultInfo {
  rowNum: number;
  prevIdx: number;
  prevTitle: string;
  prevWriter: string;
  prevDate: string;
  nextIdx: number;
  nextTitle: string;
  nextWriter: string;
  nextDate: string;
  useYn: string;
  delYn: string;
  showYn: string;
  userIdx: number;
  userNameKo: string;
  userNameEn: string;
  regUserIdx: number;
  regUserNameKo: string;
  regUserNameEn: string;
  regDttm: string;
  modUserIdx: number;
  modUserNameKo: string;
  modUserNameEn: string;
  modDttm: string;
  boardIdx: number;
  boardType: string;
  boardTypeCd: string;
  categoryType: string;
  categoryTypeCd: string;
  processStatus: string;
  processStatusCd: string;
  subject: string;
  subTitle: string;
  content: string;
  viewCount: number;
  alimYn: string;
  importantType: string;
  importantTypeCd: string;
  openYn: string;
  boardPwd: string;
  userNameFirstKo: string;
  userNameLastKo: string;
  userNameFirstEn: string;
  userNameLastEn: string;
  userName: string;
  localYn: string;
  email: string;
  gender: string;
  genderCd: string;
  birthYyyy: string;
  birthMm: string;
  birthDd: string;
  interPhoneNumber: string;
  mobile1: string;
  mobile2: string;
  mobile3: string;
  mobileAgency: string;
  mobileAgencyCd: string;
  fileInfo: FileInfo[];
  commentInfo: CommentInfo;
}

export interface FileInfo {
  rowNum: number;
  prevIdx: number;
  prevTitle: string | null;
  prevWriter: string | null;
  prevDate: string | null;
  nextIdx: number;
  nextTitle: string | null;
  nextWriter: string | null;
  nextDate: string | null;
  useYn: string | null;
  delYn: string;
  showYn: string | null;
  userIdx: number;
  userNameKo: string;
  userNameEn: string;
  regUserIdx: number;
  regUserNameKo: string;
  regUserNameEn: string;
  regDttm: string;
  modUserIdx: number | null;
  modUserNameKo: string | null;
  modUserNameEn: string | null;
  modDttm: string | null;
  fileIdx: number;
  typeIdx: number;
  fileUuid: string;
  originType: string;
  priority: number | null;
  originTypeCd: string;
  dirType: string;
  dirTypeCd: string;
  fileType: string;
  fileTypeCd: string;
  contentType: string;
  fileExt: string;
  fileSize: string;
  fileNameOrg: string;
  fileNameEnc: string;
  filePath: string;
  filePathEnc: string;
  fileContent: string | null;
}

export interface CommentInfo {
  rowNum: number;
  prevIdx: number;
  prevTitle: string;
  prevWriter: string;
  prevDate: string;
  nextIdx: number;
  nextTitle: string;
  nextWriter: string;
  nextDate: string;
  useYn: string;
  delYn: string;
  showYn: string;
  userIdx: number;
  userNameKo: string;
  userNameEn: string;
  regUserIdx: number;
  regUserNameKo: string;
  regUserNameEn: string;
  regDttm: string;
  modUserIdx: number;
  modUserNameKo: string;
  modUserNameEn: string;
  modDttm: string;
  boardIdx: number;
  commentIdx: number;
  boardRef: number;
  boardRefOrder: number;
  boardStep: number;
  targetIdx: number;
  commentCount: number;
  boardType: string;
  boardTypeCd: string;
  categoryType: string;
  categoryTypeCd: string;
  processStatus: string;
  processStatusCd: string;
  subject: string;
  subTitle: string;
  content: string;
  viewCount: number;
  alimYn: string;
  importantType: string;
  importantTypeCd: string;
  openYn: string;
  boardPwd: string;
  userNameFirstKo: string;
  userNameLastKo: string;
  userNameFirstEn: string;
  userNameLastEn: string;
  localYn: string;
  email: string;
  gender: string;
  genderCd: string;
  birthYyyy: string;
  birthMm: string;
  birthDd: string;
  interPhoneNumber: string;
  mobile1: string;
  mobile2: string;
  mobile3: string;
  mobileAgency: string;
  mobileAgencyCd: string;
  fileInfo: Record<string, unknown>;
}

export interface GetBoardListApiResponse {
  pageInfo: PageInfo;
  resultInfo: ResultInfo[];
  codeInfo?: any;
}

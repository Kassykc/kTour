import type { PageInfo } from "@/types/admin/page";
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
  fileInfo: object; // 빈 객체가 올 수 있음
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
  fileInfo: object; // 빈 객체가 올 수 있음
  commentInfo: CommentInfo | null; // commentInfo가 null일 수 있음
}

export interface GetBoardListResponse {
  pageInfo: PageInfo;
  resultInfo: (ResultInfo | null)[];
  codeInfo: any | null;
}

export interface UserData {
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
  userId: string;
  userPwd: string;
  userKey: string;
  userNameFirstKo: string;
  userNameLastKo: string;
  userNameFirstEn: string;
  userNameLastEn: string;
  localYn: string;
  email: string;
  securityCode: string;
  gender: string;
  birthYyyy: string;
  birthMm: string;
  birthDd: string;
  interPhoneNumber: string;
  mobile1: string;
  mobile2: string;
  mobile3: string;
  mobileAgency: string;
  signinPolicy: string;
  userRole: string;
  userType: string;
  userStatus: string;
  pwdChangePeriod: number;
  firstSigninYn: string;
  connCount: number;
  userSalt: string;
  lastSigninDttm: string;
  attachmentFile: string[];
}

export interface GetUserResultInfo {
  rowNum: number | null;
  prevIdx: number | null;
  prevTitle: string | null;
  prevWriter: string | null;
  prevDate: string | null;
  nextIdx: number | null;
  nextTitle: string | null;
  nextWriter: string | null;
  nextDate: string | null;
  useYn: string | null;
  delYn: string | null;
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
  userId: string;
  userKey: string;
  userPwd: string;
  userSalt: string;
  userNameFirstKo: string;
  userNameLastKo: string;
  userNameFirstEn: string;
  userNameLastEn: string;
  email: string | null;
  gender: string | null;
  genderCd: string | null;
  birthYyyy: string | null;
  birthMm: string | null;
  birthDd: string | null;
  interPhoneNumber: string;
  mobile1: string;
  mobile2: string;
  mobile3: string;
  token: string | null;
  tokenType: string | null;
  connCount: number;
  userRole: string;
  fileCount: number;
  userRoleCd: string;
  userType: string;
  userTypeCd: string;
  userStatus: string;
  userStatusCd: string;
  signinPolicy: string;
  signinPolicyCd: string;
  mobileAgency: string | null;
  mobileAgencyCd: string | null;
  localYn: string | null;
  securityCode: string | null;
  pwdChangePeriod: number;
  firstSigninYn: string | null;
  lastSigninDttm: string | null;
  organizationType: string | null;
  organizationNameKo: string | null;
  organizationNameEn: string | null;
  organizationIdx: number | null;
  specializedNameKo: string | null;
  specializedNameEn: string | null;
  specializedIdx: number | null;
  departmentNameKo: string | null;
  departmentNameEn: string | null;
  departmentIdx: number | null;
  userMemo: string | null;
  fileInfo: any[]; // File 정보의 구체적인 구조가 없으므로 `any[]`로 처리
  agree_info: any | null; // agree_info의 구체적인 구조가 없으므로 `any | null`로 처리
}

export interface GetUserCodeInfo {
  codeType: string;
  codeName: string;
  codeKey: string;
  codeValue: string;
  codeParentKey: string | null;
}

export interface GetUserResponse {
  resultInfo: GetUserResultInfo;
  codeInfo: GetUserCodeInfo[];
}

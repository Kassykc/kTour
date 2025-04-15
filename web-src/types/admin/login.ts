export interface ResultInfo {
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
  token: string;
  tokenType: string;
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
  firstSigninYn: string;
  lastSigninDttm: string;
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
  fileInfo: any[]; // Adjust type based on structure
  agree_info: any[] | null; // Adjust type based on structure
}

export interface CodeInfo {
  codeType: string;
  codeName: string;
  codeKey: string;
  codeValue: string;
  codeParentKey: string | null;
}

export interface ApiResponse {
  resultInfo: ResultInfo;
  codeInfo: CodeInfo[];
}

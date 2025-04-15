export interface MenuInfo {
  menuIdx: number;
  menuNameKo: string;
  menuNameEn: string;
  menuCode: string;
  menuPath?: string;
  menuDepth: number;
  orderNo: number;
  allowedRole: string[];
  useYn: "Y" | "N";
  delYn: "Y" | "N";
  showYn: "Y" | "N";
  regUserIdx: number;
  regUserNameKo: string;
  regUserNameEn: string;
  regDttm: string;
  modUserIdx?: number | null;
  modUserNameKo?: string | null;
  modUserNameEn?: string | null;
  modDttm?: string | null;
}

export interface CodeInfo {
  codeType: string;
  codeName: string;
  codeKey: string;
  codeValue: string;
  codeParentKey?: string | null;
}

export interface ApiResponse {
  resultInfo: MenuInfo[];
  codeInfo: CodeInfo[];
}

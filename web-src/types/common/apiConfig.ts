// 각 스토어에서 사용할 API 정보 설정
import type { apiMethod } from "@/types/common/apiMethod";
export interface apiConfig {
  method: apiMethod["method"];
  url: string;
  auth: boolean;
}

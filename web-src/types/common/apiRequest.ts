// types/common/request.ts
import type { apiMethod } from "@/types/common/apiMethod";

export interface ApiRequest {
  url: string; // 요청 URL
  method: apiMethod["method"]; // HTTP 메서드
  data?: FormData | Record<string, any> | null | undefined; // 요청 본문 (선택적)
  isAuthRequired?: boolean; // 인증 필요 여부 (기본값: false)
}

import type { ApiRequest } from "@/types/common/apiRequest";
// types/common/apiResponse.ts
export interface UseApiReturn {
  apiResponse: Record<string, any> | null; // API 응답
  fetchData: (request: ApiRequest) => Promise<any | null>;
  isLoading: boolean; // 로딩 상태
  error: string | null; // 에러 상태
}

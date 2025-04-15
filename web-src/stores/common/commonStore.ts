import { defineStore } from "pinia";
import { useApi } from "@/composables/common/useApi";
import type { apiConfig } from "@/types/common/apiConfig";

// 스토어에 기본 API 설정을 추가
export function commonStore(storeName: string) {
  const store = defineStore(storeName, () => {
    const { apiResponse, fetchData, isLoading, error } = useApi();

    let apiConfig: apiConfig;

    const callApi = async (data: any) => {
      return await usefetchData(data);
    };

    // 페이지나 컴포넌트에서는 데이터만 전달하도록 변경
    const usefetchData = async (data: any | undefined = undefined) => {
      const { method, url, auth } = apiConfig;
      await fetchData(url, method, data, auth);
    };

    return {
      apiResponse,
      usefetchData,
      isLoading,
      error,
    };
  });

  return store();
}

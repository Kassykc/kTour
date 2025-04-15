import { handleError } from "@/utils/errorHandler"; // 에러 핸들러 모듈을 임포트합니다.
import type { apiMethod } from "@/types/common/apiMethod";

export function useApi() {
  const apiResponse = ref<any | null>(null);
  const isLoading = ref(false);
  const error = ref<string | null>(null);
  const token = ref<string | null>(null);

  const fetchData = async (request: {
    url: string;
    method: apiMethod["method"];
    data?: any;
    isAuthRequired?: boolean;
  }) => {
    const { url, method, data, isAuthRequired = false } = request;

    isLoading.value = true;
    error.value = null;

    try {
      const createHeaders = async () => {
        let headers: Record<string, string> = {
          "Accept-Language": common.getLang(),
          Sid: common.getSid(),
          Tid: common.getTid(),
        };

        if (isAuthRequired) {
          token.value = common.getCookie('artToken');
          if (token.value) {
            headers["Showcase-Src"] = ``;
            headers["Showcase-Token"] = `${token.value}`;
          }
          if (url.includes("xendit")) {
            headers[
              "Authorization"
            ] = `Basic eG5kX3Byb2R1Y3Rpb25fZjAwc0M1bHpmMzRmWDFTRjUzeVZkQVRxSTlYWTAwR1J2TEFMdnpKbWhLc3FCSlBTd1FIbjRXdjVXMXl3bG9GOg==`;
          }
        }

        return headers;
      };

      const headers = await createHeaders();

      const fetchOptions: any = {
        method: method as apiMethod["method"],
        headers: headers,
      };

      if (data instanceof FormData) {
        fetchOptions.body = data;
      } else if (data) {
        fetchOptions.body = JSON.stringify(data);
        headers["Content-Type"] = "application/json";
      } else {
        headers["Content-Type"] = "application/json";
      }

      const { data: responseData, error: fetchError } = await useFetch<any>(
        url,
        fetchOptions
      );

      if (fetchError.value) {
        throw fetchError.value;
      }

      if (responseData.value) {
        apiResponse.value = responseData.value;
      }

      return { data: apiResponse.value, error: null };
    } catch (err) {
      // 에러 핸들링 유틸리티를 통해 에러 메시지 처리
      const errorMessage = handleError(err);
      error.value = errorMessage;
      return { data: null, error: errorMessage };
    } finally {
      isLoading.value = false;
    }
  };

  return {
    apiResponse,
    fetchData,
    isLoading,
    error,
  };
}

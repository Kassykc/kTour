import { useApi } from "@/composables/common/useApi"; // 공통 API 호출 모듈 가져오기
import { COMMON_API_URLS } from "@/apis/common/urls"; // URL 경로 가져오기
import type { ApiRequest } from "@/types/common/apiRequest";

// Display 관련 API 호출 함수들
export const getMenus = async () => {
  const { fetchData } = useApi();
  const params: ApiRequest = {
    url: COMMON_API_URLS.MENU_URL,
    method: "get",
    isAuthRequired: true,
  };

  const response = await fetchData(params);
  return response;
};

export const postLogin = async (data: any) => {
  const { fetchData } = useApi();
  const params: ApiRequest = {
    url: COMMON_API_URLS.LOGIN_URL,
    method: "post",
    data: data,
    isAuthRequired: false,
  };

  const response = await fetchData(params);
  return response;
};

export const postLogout = async () => {
  const { fetchData } = useApi();
  const params: ApiRequest = {
    url: COMMON_API_URLS.LOGOUT_URL,
    method: "post",
    isAuthRequired: true,
  };

  const response = await fetchData(params);
  return response;
};

export const getCommonFile = async () => {
  const { fetchData } = useApi();
  const params: ApiRequest = {
    url: COMMON_API_URLS.LOGOUT_URL,
    method: "get",
    isAuthRequired: true,
  };

  const response = await fetchData(params);
  return response;
};

export const getCodes = async (data: any) => {
  const { fetchData } = useApi();
  const params: ApiRequest = {
    url: COMMON_API_URLS.CODE_URL,
    method: "post",
    data: data,
    isAuthRequired: false,
  };

  const response = await fetchData(params);
  return response;
};

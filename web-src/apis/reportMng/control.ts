import { useApi } from "@/composables/common/useApi"; // 공통 API 호출 모듈 가져오기
import { REPORT_API_URLS } from "~/apis/reportMng/urls"; // URL 경로 가져오기
import type { ApiRequest } from "@/types/common/apiRequest";
import { createFormData } from "@/composables/common/createFormData"; // FormData 생성 모듈 가져오기

export const postBoardList = async (data: any) => {
  const { fetchData } = useApi();
  const params: ApiRequest = {
    url: REPORT_API_URLS.POST_LIST_URL,
    method: "post",
    data: data,
    isAuthRequired: true,
  };

  const response = await fetchData(params);
  return response;
};

export const postBoard = async (data: any) => {
  const { fetchData } = useApi();
  const params: ApiRequest = {
    url: REPORT_API_URLS.ADMIN_USE_URL,
    method: "post",
    data: data,
    isAuthRequired: true,
  };

  const response = await fetchData(params);
  return response;
};

export const getBoard = async (data: any) => {
  const { fetchData } = useApi();
  const params: ApiRequest = {
    url: REPORT_API_URLS.CLIENT_USE_URL + "/" + data.repotIdx,
    method: "get",
    isAuthRequired: true,
  };

  const response = await fetchData(params);
  return response;
};

export const updateBoard = async (data: any) => {
  const { fetchData } = useApi();
  const params: ApiRequest = {
    url: REPORT_API_URLS.ADMIN_USE_URL,
    method: "put",
    data: data,
    isAuthRequired: true,
  };

  const response = await fetchData(params);
  return response;
};

export const deleteBoard = async (data: any) => {
  const { fetchData } = useApi();
  const params: ApiRequest = {
    url: REPORT_API_URLS.ADMIN_USE_URL + "/" + data,
    method: "delete",
    isAuthRequired: true,
  };

  const response = await fetchData(params);
  return response;
};

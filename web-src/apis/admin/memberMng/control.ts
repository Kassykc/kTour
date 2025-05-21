import { useApi } from "@/composables/common/useApi"; // 공통 API 호출 모듈 가져오기
import { PROFILEMNG_API_URLS } from "~/apis/admin/memberMng/urls"; // URL 경로 가져오기
import type { ApiRequest } from "@/types/common/apiRequest";

export const postBoardList = async (data: any) => {
  const { fetchData } = useApi();
  const params: ApiRequest = {
    url: PROFILEMNG_API_URLS.POST_LIST_URL,
    method: "post",
    data: data,
    isAuthRequired: true,
  };

  const response = await fetchData(params);
  return response;
};

export const getUser = async (data: any) => {
  const { fetchData } = useApi();
  const params: ApiRequest = {
    url: PROFILEMNG_API_URLS.SET_USER_URL + "/" + data.userId,
    method: "get",
    isAuthRequired: true,
  };

  const response = await fetchData(params);
  return response;
};

export const postUser = async (data: any) => {
  const { fetchData } = useApi();
  const params: ApiRequest = {
    url: PROFILEMNG_API_URLS.SET_USER_URL,
    method: "post",
    data: data,
    isAuthRequired: true,
  };

  const response = await fetchData(params);
  return response;
};

export const putUser = async (data: any) => {
  const { fetchData } = useApi();
  const params: ApiRequest = {
    url: PROFILEMNG_API_URLS.SET_USER_URL,
    method: "put",
    data: data,
    isAuthRequired: true,
  };

  const response = await fetchData(params);
  return response;
};

export const deleteUser = async (data: any) => {
  const { fetchData } = useApi();
  const params: ApiRequest = {
    url: PROFILEMNG_API_URLS.SET_USER_URL + "/" + data,
    method: "delete",
    data: data,
    isAuthRequired: true,
  };

  const response = await fetchData(params);
  return response;
};

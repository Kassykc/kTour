import { useApi } from "@/composables/common/useApi"; // 공통 API 호출 모듈 가져오기
import { BOARDMNG_API_URLS } from "~/apis/admin/boardMng/urls"; // URL 경로 가져오기
import type { ApiRequest } from "@/types/common/apiRequest";
import { createFormData } from "@/composables/common/createFormData"; // FormData 생성 모듈 가져오기

export const postBoardList = async (data: any) => {
  const { fetchData } = useApi();
  const params: ApiRequest = {
    url: BOARDMNG_API_URLS.POST_LIST_URL,
    method: "post",
    data: data,
    isAuthRequired: true,
  };

  const response = await fetchData(params);
  return response;
};

export const postBoard = async (data: any) => {
  const formData = createFormData(data, data?.file, data?.thumbnail);
  const { fetchData } = useApi();
  const params: ApiRequest = {
    url: BOARDMNG_API_URLS.INSERT_BOARD_URL,
    method: "post",
    data: formData,
    isAuthRequired: true,
  };

  const response = await fetchData(params);
  return response;
};

export const getBoard = async (data: any) => {
  const { fetchData } = useApi();
  const params: ApiRequest = {
    url: BOARDMNG_API_URLS.SET_BOARD_URL + "/" + data.boardIdx,
    method: "get",
    isAuthRequired: true,
  };

  const response = await fetchData(params);
  return response;
};

export const updateBoard = async (data: any) => {
  const formData = createFormData(data, data?.file, data?.thumbnail);
  const { fetchData } = useApi();
  const params: ApiRequest = {
    url: BOARDMNG_API_URLS.SET_BOARD_URL,
    method: "put",
    data: formData,
    isAuthRequired: true,
  };

  const response = await fetchData(params);
  return response;
};

export const deleteBoard = async (data: any) => {
  const { fetchData } = useApi();
  const params: ApiRequest = {
    url: BOARDMNG_API_URLS.SET_BOARD_URL + "/" + data,
    method: "delete",
    isAuthRequired: true,
  };

  const response = await fetchData(params);
  return response;
};

export const postExcelDown = async (data: any) => {
  const { fetchData } = useApi();
  const params: ApiRequest = {
    url: BOARDMNG_API_URLS.SET_BOARD_URL + "/_download",
    method: "post",
    data: data,
    isAuthRequired: true,
  };

  const response = await fetchData(params);
  return response;
};

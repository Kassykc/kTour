import { useApi } from "@/composables/common/useApi"; // 공통 API 호출 모듈 가져오기
import { ART_API_URLS } from "@/apis/art/urls"; // URL 경로 가져오기
import type { ApiRequest } from "@/types/common/apiRequest"; // ApiRequest 타입 가져오기
import { createFormData } from "@/composables/common/createFormData";

const { fetchData } = useApi(); // 공통 API 호출 함수

export const postCodes = async (data: any) => {
  const params: ApiRequest = {
    url: ART_API_URLS.CODE_LIST,
    method: "post",
    data: data,
    isAuthRequired: false,
  };
  return await fetchData(params);
};

export const postArtistList = async (data: any) => {
  const params: ApiRequest = {
    url: ART_API_URLS.ARTIST_LIST,
    method: "post",
    data: data,
    isAuthRequired: false,
  };
  return await fetchData(params);
};

export const getArtistDtl = async (data: any) => {
  const params: ApiRequest = {
    url: ART_API_URLS.ARTIST_DETAIL + data.people_idx,
    method: "get",
    isAuthRequired: false,
  };
  return await fetchData(params);
};

export const postGalleryList = async (data: any) => {
  const params: ApiRequest = {
    url: ART_API_URLS.GALLERY_LIST,
    method: "post",
    data: data,
    isAuthRequired: false,
  };
  return await fetchData(params);
};

export const getGalleryDtl = async (data: any) => {
  const params: ApiRequest = {
    url: ART_API_URLS.GALLERY_DETAIL + data.workIdx,
    method: "get",
    isAuthRequired: false,
  };
  return await fetchData(params);
};

export const postComment = async (data: any) => {
  const formdata = createFormData(data);
  const params: ApiRequest = {
    url: ART_API_URLS.REG_COMMENT,
    method: "post",
    data: formdata,
    isAuthRequired: false,
  };
  return await fetchData(params);
};

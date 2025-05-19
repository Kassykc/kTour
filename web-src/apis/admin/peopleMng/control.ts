import { useApi } from "@/composables/common/useApi"; // 공통 API 호출 모듈 가져오기
import { PROFILEMNG_API_URLS } from "~/apis/admin/peopleMng/urls"; // URL 경로 가져오기
import type { ApiRequest } from "@/types/common/apiRequest";
import { createFormData } from "@/composables/common/createFormData"; // FormData 생성 모듈 가져오기

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

export const postPeopleList = async (data: any) => {
  const { fetchData } = useApi();
  const params: ApiRequest = {
    url: PROFILEMNG_API_URLS.SET_PEOPLE_URL2 + "s",
    method: "post",
    data: data,
    isAuthRequired: true,
  };

  const response = await fetchData(params);
  return response;
};

export const postPeopleCategoryList = async (data: any) => {
  const { fetchData } = useApi();
  const params: ApiRequest = {
    url: PROFILEMNG_API_URLS.SET_PEOPLE_URL + "/_categories",
    method: "post",
    data: data,
    isAuthRequired: true,
  };

  const response = await fetchData(params);
  return response;
};

export const getPeople = async (data: any) => {
  const { fetchData } = useApi();
  const params: ApiRequest = {
    url: PROFILEMNG_API_URLS.SET_PEOPLE_URL2 + "/" + data.peopleIdx,
    method: "get",
    isAuthRequired: true,
  };

  const response = await fetchData(params);
  return response;
};

export const getPeopleCategory = async (data: any) => {
  const { fetchData } = useApi();
  const params: ApiRequest = {
    url: PROFILEMNG_API_URLS.SET_PEOPLE_URL + "/category/" + data.categoryIdx,
    method: "get",
    isAuthRequired: true,
  };

  const response = await fetchData(params);
  return response;
};

export const postPeople = async (data: any) => {
  const formData = createFormData(
    data,
    data?.file,
    data?.attachmentPeople,
    data?.profile
  );
  const { fetchData } = useApi();
  const params: ApiRequest = {
    url: PROFILEMNG_API_URLS.SET_PEOPLE_URL,
    method: "post",
    data: formData,
    isAuthRequired: true,
  };

  const response = await fetchData(params);
  return response;
};

export const postPeopleCategory = async (data: any) => {
  const { fetchData } = useApi();
  const params: ApiRequest = {
    url: PROFILEMNG_API_URLS.SET_PEOPLE_URL + "/category",
    method: "post",
    data: data,
    isAuthRequired: true,
  };

  const response = await fetchData(params);
  return response;
};

export const putPeople = async (data: any) => {
  const formData = createFormData(
    data,
    data?.file,
    data?.attachmentPeople,
    data?.profile
  );
  const { fetchData } = useApi();
  const params: ApiRequest = {
    url: PROFILEMNG_API_URLS.SET_PEOPLE_URL,
    method: "put",
    data: formData,
    isAuthRequired: true,
  };

  const response = await fetchData(params);
  return response;
};

export const putPeopleCategory = async (data: any) => {
  const { fetchData } = useApi();
  const params: ApiRequest = {
    url: PROFILEMNG_API_URLS.SET_PEOPLE_URL + "/category",
    method: "put",
    data: data,
    isAuthRequired: true,
  };

  const response = await fetchData(params);
  return response;
};

export const deletePeople = async (data: any) => {
  const { fetchData } = useApi();
  const params: ApiRequest = {
    url: PROFILEMNG_API_URLS.SET_PEOPLE_URL + "/" + data,
    method: "delete",
    data: data,
    isAuthRequired: true,
  };

  const response = await fetchData(params);
  return response;
};

export const deletePeopleCategory = async (data: any) => {
  const { fetchData } = useApi();
  const params: ApiRequest = {
    url: PROFILEMNG_API_URLS.SET_PEOPLE_URL + "/category/" + data,
    method: "delete",
    data: data,
    isAuthRequired: true,
  };

  const response = await fetchData(params);
  return response;
};

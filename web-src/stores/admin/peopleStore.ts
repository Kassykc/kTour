import {
  handleResponse,
  apiResponse,
  errorMessage,
} from "@/stores/common/handleResponse";
import {
  postPeopleList,
  postPeopleCategoryList,
  getPeople,
  getPeopleCategory,
  postPeople,
  postPeopleCategory,
  putPeople,
  putPeopleCategory,
  deletePeople,
  deletePeopleCategory,
} from "~/apis/admin/peopleMng/control";

export function useMemberMngStore(storeName: string) {
  const store = defineStore(storeName, () => {
    const getPeopleList = async (data: any) => {
      const response = await postPeopleList(data); // API 호출
      return handleResponse(response); // 응답 처리
    };

    const getPeopleCategoryList = async (data: any) => {
      const response = await postPeopleCategoryList(data); // API 호출
      return handleResponse(response); // 응답 처리
    };

    const updatePeople = async (data: any) => {
      const response = await putPeople(data); // API 호출
      return handleResponse(response); // 응답 처리
    };

    const updatePeopleCategory = async (data: any) => {
      const response = await putPeopleCategory(data); // API 호출
      return handleResponse(response); // 응답 처리
    };

    const insertPeople = async (data: any) => {
      const response = await postPeople(data); // API 호출
      return handleResponse(response); // 응답 처리
    };

    const insertPeopleCategory = async (data: any) => {
      const response = await postPeopleCategory(data); // API 호출
      return handleResponse(response); // 응답 처리
    };

    const delPeople = async (data: any) => {
      const response = await deletePeople(data); // API 호출
      return handleResponse(response); // 응답 처리
    };

    const delPeopleCategory = async (data: any) => {
      const response = await deletePeopleCategory(data); // API 호출
      return handleResponse(response); // 응답 처리
    };

    const dtlPeople = async (data: any) => {
      const response = await getPeople(data); // API 호출
      return handleResponse(response); // 응답 처리
    };

    const dtlPeopleCategory = async (data: any) => {
      const response = await getPeopleCategory(data); // API 호출
      return handleResponse(response); // 응답 처리
    };

    return {
      getPeopleList,
      getPeopleCategoryList,
      updatePeople,
      updatePeopleCategory,
      insertPeople,
      insertPeopleCategory,
      delPeople,
      delPeopleCategory,
      dtlPeople,
      dtlPeopleCategory,
    };
  });

  return store();
}

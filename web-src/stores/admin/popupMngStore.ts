import {
  handleResponse,
  apiResponse,
  errorMessage,
} from "@/stores/common/handleResponse";
import {
  postPopupList,
  postPopup,
  getBoard,
  updateBoard,
  deleteBoard,
} from "@/apis/admin/popupMng/control";

export function usePopupMngStore(storeName: string) {
  const store = defineStore(storeName, () => {
    const getBoardList = async (data: any) => {
      const response = await postPopupList(data); // API 호출
      return handleResponse(response); // 응답 처리
    };

    const insertBoard = async (data: any) => {
      const response = await postPopup(data); // API 호출
      return handleResponse(response); // 응답 처리
    };

    const dtlBoard = async (data: any) => {
      const response = await getBoard(data); // API 호출
      return handleResponse(response); // 응답 처리
    };

    const uptBoard = async (data: any) => {
      const response = await updateBoard(data); // API 호출
      return handleResponse(response); // 응답 처리
    };

    const delBoard = async (data: any) => {
      const response = await deleteBoard(data); // API 호출
      return handleResponse(response); // 응답 처리
    };

    return {
      getBoardList,
      insertBoard,
      dtlBoard,
      uptBoard,
      delBoard,
    };
  });

  return store();
}

import {
  handleResponse,
  apiResponse,
  errorMessage,
} from "@/stores/common/handleResponse";
import {
  postBoardList,
  postBoard,
  getBoard,
  updateBoard,
  deleteBoard,
  postExcelDown,
} from "@/apis/boardMng/control";
import { getCommonFile } from "@/apis/common/control";

export function useBoardMngStore(storeName: string) {
  const store = defineStore(storeName, () => {
    const getBoardList = async (data: any) => {
      const response = await postBoardList(data); // API 호출
      return common.convertKeysToCamel(response.data);
    };

    const insertBoard = async (data: any) => {
      const response = await postBoard(data); // API 호출
      return common.convertKeysToCamel(response.data);
    };

    const dtlBoard = async (data: any) => {
      const response = await getBoard(data); // API 호출
      return common.convertKeysToCamel(response.data);
    };

    const uptBoard = async (data: any) => {
      const response = await updateBoard(data); // API 호출
      return common.convertKeysToCamel(response.data);
    };

    const delBoard = async (data: any) => {
      const response = await deleteBoard(data); // API 호출
      return common.convertKeysToCamel(response.data);
    };

    const getFiles = async (data: any) => {
      const response = await getCommonFile(data); // API 호출
      return common.convertKeysToCamel(response.data);
    };

    const getExcel = async (data: any) => {
      const response = await postExcelDown(data); // API 호출
      return common.convertKeysToCamel(response.data);
    };

    return {
      getBoardList,
      insertBoard,
      dtlBoard,
      uptBoard,
      delBoard,
      getFiles,
      getExcel,
    };
  });

  return store();
}

import {
  handleResponse,
  apiResponse,
  errorMessage,
} from "@/stores/common/handleResponse";
import {
  getBoardDetail,
  getBoardList,
  regBoard,
  postComment,
  putComment,
  deleteComment,
} from "@/apis/board/control";

export function createBoardStore(storeName: string) {
  const store = defineStore(storeName, () => {
    // 게시글 목록
    const boardList = async (data: any) => {
      const response = await getBoardList(data); // API 호출
      return handleResponse(response);
    };

    // 게시글 상세 정보
    const boardDetail = async (index: any) => {
      const response = await getBoardDetail(index);
      return handleResponse(response);
    };

    // 게시글 등록
    const insertBoard = async (data: any) => {
      const response = await regBoard(data); // API 호출
      return handleResponse(response); // 응답 처리
    };

    // 댓글 등록
    const insertComment = async (data: any) => {
      const response = await postComment(data); // API 호출
      return handleResponse(response); // 응답 처리
    };

    // 댓글 수정
    const uptComment = async (data: any) => {
      const response = await putComment(data); // API 호출
      return handleResponse(response); // 응답 처리
    };

    // 댓글 삭제
    const delComment = async (data: any) => {
      const response = await deleteComment(data); // API 호출
      return handleResponse(response); // 응답 처리
    };

    return {
      boardList,
      boardDetail,
      insertBoard,
      insertComment,
      uptComment,
      delComment,
    };
  });

  return store();
}

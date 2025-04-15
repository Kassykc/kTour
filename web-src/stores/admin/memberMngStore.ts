import {
    handleResponse,
    apiResponse,
    errorMessage,
} from "@/stores/common/handleResponse";
import {
    postBoardList,
    getUser,
    putUser,
    postUser,
    deleteUser,
} from "~/apis/admin/memberMng/control";

export function useMemberMngStore(storeName: string) {
    const store = defineStore(storeName, () => {
        const getBoardList = async (data: any) => {
            const response = await postBoardList(data); // API 호출
            return common.convertKeysToCamel(response.data); // 응답 데이터 반환
        };

        const updateUser = async (data: any) => {
            const response = await putUser(data); // API 호출
            return common.convertKeysToCamel(response.data); // 응답 데이터 반환
        };

        const insertUser = async (data: any) => {
            const response = await postUser(data); // API 호출
            return common.convertKeysToCamel(response.data); // 응답 데이터 반환
        };

        const delUser = async (data: any) => {
            const response = await deleteUser(data); // API 호출
            return common.convertKeysToCamel(response.data); // 응답 데이터 반환
        };

        const dtlUser = async (data: any) => {
            const response = await getUser(data); // API 호출
            return common.convertKeysToCamel(response.data); // 응답 데이터 반환
        };

        return { getBoardList, insertUser, updateUser, dtlUser, delUser };
    });

    return store();
}

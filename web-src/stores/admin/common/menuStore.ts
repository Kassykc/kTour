import {
  handleResponse,
  apiResponse,
  errorMessage,
} from "@/stores/common/handleResponse";
import { getMenus, getCodes } from "@/apis/admin/common/control";

export function useMenuStore(storeName: string) {
  const store = defineStore(storeName, () => {
    const setMenus = async () => {
      const response = await getMenus(); // API 호출
      return common.convertKeysToCamel(response.data); // 응답 처리
    };

    const setCodes = async (data: any) => {
      const response = await getCodes(data); // API 호출
      return common.convertKeysToCamel(response.data);
    };

    return { setMenus, setCodes };
  });

  return store();
}

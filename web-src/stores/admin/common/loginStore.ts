import {
  handleResponse,
  apiResponse,
  errorMessage,
} from "@/stores/common/handleResponse";
import { postLogin, postLogout } from "@/apis/admin/common/control";

export function useLoginStore(storeName: string) {
  const store = defineStore(storeName, () => {
    const goLogin = async (data: any) => {
      const response = await postLogin(data); // API 호출
      return common.convertKeysToCamel(response.data);
    };

    const goLogout = async () => {
      const response = await postLogout(); // API 호출
      return common.convertKeysToCamel(response.data);
    };

    return { goLogin, goLogout };
  });

  return store();
}

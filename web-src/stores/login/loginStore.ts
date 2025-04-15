import { defineStore } from "pinia";
import { memberLogin, memberLogout } from "@/apis/member/control";
import { getTermsPolicy, getTermsService } from "@/apis/terms/control";
import type { TermsResponse } from "@/types/terms/terms";
import type {
  loginRequest,
  loginResponse,
  logOutResponse,
} from "@/types/login/login";

export function useLoginStore(storeName: string) {
  const store = defineStore(storeName, () => {
    const login = async (data: loginRequest) => {
      const response = await memberLogin(data); // API 호출

      if (response.data != null && response.data != undefined) {
        return response.data as loginResponse;
      }
    };

    const logOut = async () => {
      const response = await memberLogout();

      if (
        response.data.rsltTp == "R000" &&
        response.data != null &&
        response.data != undefined
      ) {
        return response.data as logOutResponse;
      }
    };

    const termsService = async () => {
      const response = await getTermsService();

      if (
        response.data.rsltTp == "R000" &&
        response.data != null &&
        response.data != undefined
      ) {
        return response.data as TermsResponse;
      }
    };

    const termsPolicy = async () => {
      const response = await getTermsPolicy();

      if (
        response.data.rsltTp == "R000" &&
        response.data != null &&
        response.data != undefined
      ) {
        return response.data as TermsResponse;
      }
    };

    return {
      login,
      logOut,
      termsService,
      termsPolicy,
    };
  });

  return store();
}

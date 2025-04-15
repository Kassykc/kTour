// stores/login/user.ts
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null as any, // 사용자 정보를 저장
    token: "" as string, // JWT 토큰을 저장
  }),
  actions: {
    setUser(user: any, token: string) {
      this.user = user;
      this.token = token;

      // 쿠키에 사용자 정보와 토큰을 저장 (30일 동안 유효)
      document.cookie = `user=${encodeURIComponent(
        JSON.stringify(user)
      )}; path=/;`;
      document.cookie = `token=${token}; path=/;`;
    },
    clearUser() {
      this.user = null;
      this.token = "";

      // 쿠키에서 사용자 정보와 토큰 제거
      document.cookie = "user=; path=/; max-age=0";
      document.cookie = "token=; path=/; max-age=0";
    },
    loadUserFromCookies() {
      const getCookie = (name: string) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop()?.split(";").shift();
      };

      const user = getCookie("user");
      const token = getCookie('artToken');

      if (user && token) {
        this.user = JSON.parse(decodeURIComponent(user)); // 쿠키에서 사용자 정보 가져오기
        this.token = token; // 쿠키에서 토큰 가져오기
      }
    },
  },
});

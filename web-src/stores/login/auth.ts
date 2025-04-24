// stores/auth.ts
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: null as string | null, // 인증 토큰
    id: null as string | null, // 사용자 ID
  }),
  actions: {
    initAuth() {
      // 클라이언트 사이드에서 쿠키를 읽어와서 상태 초기화
      if (typeof window !== "undefined") {
        this.token = this.getCookie('medicalToken') || null; // 쿠키에서 토큰 읽기
        this.id = this.getCookie("id") || null; // 쿠키에서 ID 읽기
      }
    },
    setToken(token: string) {
      this.token = token; // 상태에 토큰 설정
      this.setCookie('medicalToken', token, 30); // 토큰을 30일 동안 유지
    },
    setId(id: string) {
      this.id = id; // 상태에 ID 설정
      this.setCookie("id", id); // ID를 30일 동안 유지
    },
    clearAuth() {
      this.token = null; // 상태에서 토큰 제거
      this.id = null; // 상태에서 ID 제거
      this.setCookie('medicalToken', "", -1); // 쿠키에서 토큰 제거
      this.setCookie("id", "", -1); // 쿠키에서 ID 제거
    },
    getCookie(name: string) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(";").shift();
      return null;
    },
    setCookie(name: string, value: string, days?: number) {
      let expires = "";
      if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = `; expires=${date.toUTCString()}`;
      }
      document.cookie = `${name}=${value}${expires}; path=/`; // 쿠키 설정
    },
  },
});

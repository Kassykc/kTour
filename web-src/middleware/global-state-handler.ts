import { defineNuxtRouteMiddleware } from "nuxt/app";
import { useGlobalStateStore } from "@/stores/common/globalState";

export default defineNuxtRouteMiddleware((to, from) => {
  sessionStorage.setItem("defineNuxtRouteMiddleware" + to, "a");
  const globalStateStore = useGlobalStateStore();

  // 페이지가 변경될 때 현재 페이지의 상태를 저장
  if (from.name) {
    const pageKey = from.fullPath;

    // scroll 위치 저장
    globalStateStore.setScrollPosition(pageKey, window.scrollY);

    // 페이지의 모든 상태를 저장
    const pageData = {
      scrollPosition: window.scrollY,
      data: (window as any).pageData || {},
    };
    globalStateStore.setPageData(pageKey, pageData);
  }

  // 이동할 페이지의 상태 복원
  const savedPageData = globalStateStore.getPageData(to.fullPath);
  if (savedPageData) {
    window.scrollTo(0, savedPageData.scrollPosition);
    (window as any).pageData = savedPageData.data; // 동적으로 복원
  }
});

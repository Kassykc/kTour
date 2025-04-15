import { defineStore } from "pinia";

export const useGlobalStateStore = defineStore("globalState", () => {
  const pageData = ref<Record<string, any>>({});
  const scrollPositions = ref<Record<string, number>>({});

  const setPageData = (key: string, data: any) => {
    pageData.value[key] = data;
  };

  const getPageData = (key: string) => {
    return pageData.value[key];
  };

  const setScrollPosition = (key: string, position: number) => {
    scrollPositions.value[key] = position;
  };

  const getScrollPosition = (key: string) => {
    return scrollPositions.value[key] || 0;
  };

  return { setPageData, getPageData, setScrollPosition, getScrollPosition };
});

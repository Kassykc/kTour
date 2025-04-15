import { defineNuxtPlugin } from "#app";
import { useRouter } from "vue-router";
import { useHistoryStore } from "@/stores/common/historyStore";

export default defineNuxtPlugin(() => {
  const router = useRouter();
  const historyStore = useHistoryStore();
  let isBackNavigation = false;

  // 브라우저 내에서 뒤로가기 이벤트 감지
  // if (typeof window !== "undefined") {
  //   window.addEventListener("popstate", () => {
  //     isBackNavigation = true; // 뒤로가기 감지
  //   });

  //   // AOS 기기에서 뒤로가기 버튼 감지 (웹뷰 환경에서만)
  //   // 예: `backbutton` 이벤트를 사용하여 AOS 기기의 뒤로가기 버튼을 감지
  //   const os = common.getCookie("os"); // AOS인 경우 "100"
  //   if (os === "100") {
  //     window.addEventListener("backbutton", (e) => {
  //       e.preventDefault(); // 기본 뒤로가기 동작 방지
  //       isBackNavigation = true; // 뒤로가기 감지
  //     });
  //   }

  //   // 라우터 이동 시 처리
  //   router.beforeEach((to, from, next) => {
  //     console.log("fdfdfdfdfdfdfd");
  //     console.log("isBackNavigation : " + isBackNavigation);
  //     const currentPath = to.path; // 현재 이동하는 경로

  //     // 페이지에서 데이터를 넘기지 않으면 null 처리
  //     const customData = historyStore.getHistoryDataForPath(currentPath); // 페이지에 넘겨준 데이터가 있으면 가져옴

  //     // 히스토리 저장 (경로와 데이터를 함께 저장)
  //     historyStore.handleHistory(currentPath, customData || null);

  //     // 뒤로가기를 감지한 경우 데이터 복원 처리
  //     if (isBackNavigation) {
  //       const lastData = historyStore.getLastHistoryData();

  //       // 무조건 `backupAct` 쿠키 생성
  //       if (lastData && lastData.data) {
  //         // 복원할 데이터가 있을 경우
  //         common.setCookie("backupAct", JSON.stringify(lastData.data));
  //       } else {
  //         // 데이터가 없으면 null을 쿠키에 저장
  //         common.setCookie("backupAct", JSON.stringify(null));
  //       }

  //       // 복원 후 히스토리에서 해당 데이터 제거
  //       historyStore.removeLastHistoryData();

  //       isBackNavigation = false; // 뒤로가기 상태 초기화
  //     }

  //     next();
  //   });
  // }
});

import { ref, watch, onMounted, onBeforeUnmount } from "vue";

export function useInfiniteScroll({
  containerClass,
  fetchMore,
  totalRows,
  currentIndex,
  pageSize,
}: {
  containerClass: string; // 스크롤 컨테이너 클래스
  fetchMore: () => Promise<void>; // 추가 데이터 로드 함수
  totalRows: Ref<number>; // 총 데이터 수
  currentIndex: Ref<number>; // 현재 인덱스
  pageSize: number; // 페이지 사이즈
}) {
  const lastScrollTime = ref(0); // 마지막 스크롤 시간
  const loading = ref(false);

  const handleScroll = () => {
    const container = document.querySelector(
      `.${containerClass}`
    ) as HTMLElement;
    if (!container) return;

    const now = Date.now();
    const { scrollTop, clientHeight, scrollHeight } = container;

    // 연속 호출 방지
    if (now - lastScrollTime.value < 300 || loading.value) return;

    lastScrollTime.value = now;

    // 스크롤 하단 도달 및 추가 데이터 로드 조건
    if (
      scrollTop + clientHeight >= scrollHeight * 0.9 &&
      totalRows.value > currentIndex.value * pageSize
    ) {
      loading.value = true;
      fetchMore().finally(() => {
        loading.value = false;
      });
    }
  };

  onMounted(() => {
    const container = document.querySelector(
      `.${containerClass}`
    ) as HTMLElement;
    if (container) container.addEventListener("scroll", handleScroll);
  });

  onBeforeUnmount(() => {
    const container = document.querySelector(
      `.${containerClass}`
    ) as HTMLElement;
    if (container) container.removeEventListener("scroll", handleScroll);
  });

  return { loading };
}

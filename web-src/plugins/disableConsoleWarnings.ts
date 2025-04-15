export default defineNuxtPlugin(() => {
  if (process.env.NODE_ENV === "development") {
    const noop = () => {}; // 아무 동작도 하지 않는 함수
    console.warn = noop; // 경고 메시지 숨기기
  }
});

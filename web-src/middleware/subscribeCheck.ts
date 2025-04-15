export default defineNuxtRouteMiddleware((to, from) => {
  const cookieValue = common.getCookie("subscribe"); // 쿠키 값 확인
  if (cookieValue) {
    return navigateTo("/"); // '/' 경로로 리다이렉트
  }
});

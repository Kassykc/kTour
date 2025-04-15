// utils/errorHandler.ts
export function handleError(error: any) {
  const router = useRouter();
  let errorMessage = "알 수 없는 오류가 발생했습니다.";

  const statusCode = error.cause.data.rsltTp || "";

  // HTTP 상태 코드별 에러 처리 로직 추가
  switch (statusCode) {
    case "R400":
      errorMessage = "잘못된 요청입니다. 입력값을 확인해주세요.";
      break;
    case "R401":
      errorMessage = "인증이 필요합니다. 로그인 후 다시 시도해주세요.";
      if (common.getCookie('artToken')) {
        common.setCookie('artToken', "");
        common.setCookie("user", "");
        common.setCookie("autoLoginToken", "");
        router.push("/");
      } else {
        common.setCookie('artToken', "");
        common.setCookie("user", "");
        common.setCookie("autoLoginToken", "");
        router.push("/no-auth");
      }
      break;
    case "R403":
      errorMessage = "권한이 없습니다. 접근이 거부되었습니다.";
      break;
    case "R404":
      errorMessage = "요청한 리소스를 찾을 수 없습니다.";
      break;
    case "R405":
      errorMessage = "서버 내부 오류입니다. 잠시 후 다시 시도해주세요.";
      break;
    default:
      errorMessage = `서버 에러: ${statusCode} - ${
        error.response.data?.message || "서버 에러가 발생했습니다."
      }`;
      break;
  }

  // 콘솔에 에러 로깅 (필요시 서버에 전송하는 로직 추가 가능)
  console.error("에러 발생:", errorMessage);

  return errorMessage;
}
